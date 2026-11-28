import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AVISO_CURSO_BLOQUEADO,
  ordenarLista,
  proyectarCatalogo,
  resumirTema,
} from '../src/lib/domain/catalogo.mjs';

const ENERO = '2026-01-01T00:00:00Z';
const FEBRERO = '2026-02-01T00:00:00Z';
const MARZO = '2026-03-01T00:00:00Z';
const ABRIL = '2026-04-01T00:00:00Z';

function curso(id, campos = {}) {
  return Object.freeze({
    id,
    publishedAt: FEBRERO,
    createdAt: ENERO,
    isWelcome: false,
    mayEdit: false,
    hasReadGrant: false,
    grantedAt: null,
    visitedAt: null,
    interest: null,
    ...campos,
  });
}

function unidad(id, position, campos = {}) {
  return Object.freeze({
    id,
    position,
    title: `Título de ${id}`,
    seen: false,
    lastStartedAt: null,
    interest: null,
    ...campos,
  });
}

function ids(entradas) {
  return entradas.map(({ id }) => id);
}

test('proyecta los cinco grupos y limita el resultado a los campos de catálogo', () => {
  const cursos = Object.freeze([
    curso('bloqueado', { videoIds: Object.freeze(['video-sintetico']), visitedAt: MARZO }),
    curso('concedido', { hasReadGrant: true, grantedAt: MARZO }),
    curso('borrador-ajeno', { publishedAt: null, role: 'admin', hasReadGrant: true }),
    curso('visitado', { hasReadGrant: true, visitedAt: MARZO }),
    curso('bienvenida', { isWelcome: true }),
    curso('borrador-docente', { publishedAt: null, mayEdit: true }),
  ]);

  assert.deepEqual(proyectarCatalogo(cursos), [
    { id: 'borrador-docente', group: 1, access: 'edit', action: 'open' },
    { id: 'bienvenida', group: 2, access: 'read', action: 'open' },
    { id: 'visitado', group: 3, access: 'read', action: 'open' },
    { id: 'concedido', group: 4, access: 'read', action: 'open' },
    { id: 'bloqueado', group: 5, access: 'blocked', action: 'notice' },
  ]);
  assert.equal(
    AVISO_CURSO_BLOQUEADO,
    'Para acceder a este curso necesitas adquirirlo. Las compras no están disponibles en esta demostración',
  );
});

test('da prioridad a la edición asignada de bienvenida y conserva una sola entrada', () => {
  const bienvenida = curso('bienvenida', {
    role: 'admin', isWelcome: true, hasReadGrant: true, mayEdit: true, visitedAt: MARZO,
  });
  assert.deepEqual(proyectarCatalogo([bienvenida]), [
    { id: 'bienvenida', group: 1, access: 'edit', action: 'open' },
  ]);
  assert.deepEqual(proyectarCatalogo([curso('bienvenida', { ...bienvenida, mayEdit: false })]), [
    { id: 'bienvenida', group: 3, access: 'read', action: 'open' },
  ]);
});

test('reproyecta visitas, concesión y revocación a partir del historial autorizado', () => {
  const bienvenida = curso('bienvenida', { isWelcome: true });
  const bienvenidaVisitada = curso('bienvenida', { ...bienvenida, visitedAt: ABRIL });
  const bloqueado = curso('curso');
  const concedido = curso('curso', { ...bloqueado, hasReadGrant: true, grantedAt: FEBRERO });
  const visitado = curso('curso', { ...concedido, visitedAt: MARZO });
  const revocado = curso('curso', { ...visitado, hasReadGrant: false, grantedAt: null });
  const reconcedido = curso('curso', { ...revocado, hasReadGrant: true, grantedAt: ABRIL });

  assert.deepEqual(proyectarCatalogo([bienvenida, bloqueado]).map(({ group }) => group), [2, 5]);
  assert.deepEqual(proyectarCatalogo([bienvenidaVisitada, concedido]).map(({ group }) => group), [3, 4]);
  assert.deepEqual(proyectarCatalogo([visitado, bienvenidaVisitada]).map(({ group }) => group), [3, 3]);
  assert.deepEqual(proyectarCatalogo([revocado]), [
    { id: 'curso', group: 5, access: 'blocked', action: 'notice' },
  ]);
  assert.deepEqual(proyectarCatalogo([reconcedido]), [
    { id: 'curso', group: 3, access: 'read', action: 'open' },
  ]);
  assert.equal(revocado.visitedAt, MARZO);
});

test('ordena edición y visitas por sus fechas e ID, con nulos al final', () => {
  const cursos = Object.freeze([
    curso('sin-fecha', { mayEdit: true, publishedAt: null, createdAt: null }),
    curso('a', { mayEdit: true, createdAt: ABRIL }),
    curso('visita-empate-antigua', { mayEdit: true, visitedAt: MARZO }),
    curso('leido-z', { hasReadGrant: true, visitedAt: MARZO, publishedAt: ABRIL }),
    curso('borrador', { mayEdit: true, publishedAt: null, createdAt: MARZO }),
    curso('leido-a', { hasReadGrant: true, visitedAt: MARZO }),
    curso('visita-empate-nueva', { mayEdit: true, visitedAt: MARZO, publishedAt: MARZO }),
    curso('Z', { mayEdit: true }),
    curso('leido-reciente', { hasReadGrant: true, visitedAt: ABRIL }),
    curso('visita-reciente', { mayEdit: true, visitedAt: ABRIL, publishedAt: ENERO }),
  ]);
  const esperado = [
    'visita-reciente', 'visita-empate-nueva', 'visita-empate-antigua', 'borrador', 'Z', 'a',
    'sin-fecha', 'leido-reciente', 'leido-a', 'leido-z',
  ];

  assert.deepEqual(ids(proyectarCatalogo(cursos)), esperado);
  assert.deepEqual(ids(proyectarCatalogo([...cursos].reverse())), esperado);
});

test('aplica el interés por grupo completo y usa concesión o publicación como respaldo', () => {
  const cursos = Object.freeze([
    curso('concedido-antiguo', { hasReadGrant: true, grantedAt: ENERO, interest: 0 }),
    curso('bloqueado-antiguo', { publishedAt: ENERO, interest: 50 }),
    curso('concedido-reciente', { hasReadGrant: true, grantedAt: MARZO, interest: -1 }),
    curso('concedido-z', { hasReadGrant: true, grantedAt: FEBRERO, interest: -1 }),
    curso('concedido-a', { hasReadGrant: true, grantedAt: FEBRERO, interest: -1 }),
    curso('concedido-sin-fecha', { hasReadGrant: true, interest: -1 }),
    curso('bloqueado-reciente', { publishedAt: MARZO }),
    curso('bloqueado-z', { interest: 0 }),
    curso('bloqueado-a', { interest: 60 }),
  ]);

  assert.deepEqual(ids(proyectarCatalogo(cursos)), [
    'concedido-antiguo', 'concedido-reciente', 'concedido-a', 'concedido-z', 'concedido-sin-fecha',
    'bloqueado-reciente', 'bloqueado-a', 'bloqueado-z', 'bloqueado-antiguo',
  ]);

  const actualizados = cursos.map((entrada) => {
    if (entrada.id === 'concedido-antiguo') return curso(entrada.id, { ...entrada, interest: Infinity });
    if (entrada.id === 'bloqueado-reciente') return curso(entrada.id, { ...entrada, interest: 0 });
    return entrada;
  });
  assert.deepEqual(ids(proyectarCatalogo(actualizados.reverse())), [
    'concedido-reciente', 'concedido-a', 'concedido-z', 'concedido-antiguo', 'concedido-sin-fecha',
    'bloqueado-a', 'bloqueado-antiguo', 'bloqueado-reciente', 'bloqueado-z',
  ]);
});

test('en fijo conserva títulos, posiciones canónicas y ordinales al cambiar el progreso', () => {
  const unidades = Object.freeze([
    unidad('a', 7, { lastStartedAt: ABRIL }),
    unidad('Z', 7, { seen: true }),
    unidad('inicio', 3, { title: 'Introducción al curso' }),
  ]);
  assert.deepEqual(ordenarLista('fixed', unidades), [
    { id: 'inicio', position: 3, title: 'Introducción al curso', seen: false, visualPosition: 1, ordinal: 1 },
    { id: 'Z', position: 7, title: 'Título de Z', seen: true, visualPosition: 2, ordinal: 2 },
    { id: 'a', position: 7, title: 'Título de a', seen: false, visualPosition: 3, ordinal: 3 },
  ]);

  const actualizadas = unidades.map((entrada) =>
    unidad(entrada.id, entrada.position, { ...entrada, seen: !entrada.seen, lastStartedAt: MARZO }),
  );
  const reordenadas = ordenarLista('fixed', actualizadas);
  assert.deepEqual(ids(reordenadas), ['inicio', 'Z', 'a']);
  assert.deepEqual(reordenadas.map(({ ordinal }) => ordinal), [1, 2, 3]);
  assert.equal(unidades[0].lastStartedAt, ABRIL);
  assert.equal(unidades[1].seen, true);
});

test('en adaptativo retoma el último inicio pendiente y deja las vistas al final sin ordinales', () => {
  const unidades = Object.freeze([
    unidad('vista-reciente', 8, { seen: true, lastStartedAt: '2026-04-02T00:00:00Z' }),
    unidad('inicio-anterior', 1, { lastStartedAt: ABRIL, interest: -2 }),
    unidad('por-interes', 4, { interest: 0 }),
    unidad('continuacion', 6, { lastStartedAt: '2026-04-01T00:00:00.250Z' }),
    unidad('vista-primera', 0, { seen: true }),
  ]);
  assert.deepEqual(ordenarLista('adaptive', unidades), [
    { id: 'continuacion', position: 6, title: 'Título de continuacion', seen: false, visualPosition: 1 },
    { id: 'por-interes', position: 4, title: 'Título de por-interes', seen: false, visualPosition: 2 },
    { id: 'inicio-anterior', position: 1, title: 'Título de inicio-anterior', seen: false, visualPosition: 3 },
    { id: 'vista-primera', position: 0, title: 'Título de vista-primera', seen: true, visualPosition: 4 },
    { id: 'vista-reciente', position: 8, title: 'Título de vista-reciente', seen: true, visualPosition: 5 },
  ]);

  const completadas = unidades.map((entrada) => entrada.id === 'continuacion'
    ? unidad(entrada.id, entrada.position, { ...entrada, seen: true })
    : entrada,
  );
  assert.deepEqual(ids(ordenarLista('adaptive', completadas)), [
    'inicio-anterior', 'por-interes', 'vista-primera', 'continuacion', 'vista-reciente',
  ]);
  assert.equal(unidades[3].lastStartedAt, '2026-04-01T00:00:00.250Z');
});

test('desempata la continuación y usa el canónico cuando falta interés de otra pendiente', () => {
  const unidades = Object.freeze([
    unidad('a', 4, { lastStartedAt: MARZO, interest: 100 }),
    unidad('z', 2, { lastStartedAt: MARZO, interest: 40 }),
    unidad('Z', 2, { lastStartedAt: MARZO }),
    unidad('interes-ausente', 3, { interest: undefined }),
    unidad('primera-canonica', 1, { interest: -7 }),
  ]);
  const esperado = ['Z', 'primera-canonica', 'z', 'interes-ausente', 'a'];

  assert.deepEqual(ids(ordenarLista('adaptive', unidades)), esperado);
  assert.deepEqual(ids(ordenarLista('adaptive', [...unidades].reverse())), esperado);
});

test('resume temas con sus propios vídeos y mantiene el modo independiente de cada lista', () => {
  const videos = Object.freeze([
    unidad('visto', 2, { seen: true, lastStartedAt: ABRIL }),
    unidad('pendiente-reciente', 4, { lastStartedAt: MARZO }),
    unidad('pendiente-antiguo', 7, { lastStartedAt: FEBRERO }),
  ]);
  const mixto = resumirTema(videos);
  const completo = resumirTema([videos[0]]);
  assert.deepEqual(mixto, { seen: false, lastStartedAt: MARZO });
  assert.deepEqual(completo, { seen: true, lastStartedAt: null });

  const temas = Object.freeze([
    unidad('sin-iniciar', 1),
    unidad('mixto', 4, mixto),
    unidad('completo', 0, completo),
  ]);
  assert.deepEqual(ids(ordenarLista('adaptive', temas)), ['mixto', 'sin-iniciar', 'completo']);
  const listaFija = ordenarLista('fixed', videos);
  assert.deepEqual(ids(listaFija), ['visto', 'pendiente-reciente', 'pendiente-antiguo']);
  assert.deepEqual(listaFija.map(({ ordinal }) => ordinal), [1, 2, 3]);
  assert.deepEqual(ids(ordenarLista('adaptive', videos)), ['pendiente-reciente', 'pendiente-antiguo', 'visto']);
  assert.deepEqual(ordenarLista('fixed', videos), listaFija);
});

test('acepta catálogos y listas vacíos, temas vacíos y listas de una sola unidad', () => {
  const vacia = Object.freeze([]);
  assert.deepEqual(proyectarCatalogo(vacia), []);
  assert.deepEqual(ordenarLista('fixed', vacia), []);
  assert.deepEqual(ordenarLista('adaptive', vacia), []);
  assert.deepEqual(resumirTema(vacia), { seen: false, lastStartedAt: null });

  const unica = Object.freeze([unidad('unica', 9)]);
  const fila = { id: 'unica', position: 9, title: 'Título de unica', seen: false, visualPosition: 1 };
  assert.deepEqual(ordenarLista('fixed', unica), [{ ...fila, ordinal: 1 }]);
  assert.deepEqual(ordenarLista('adaptive', unica), [fila]);
  assert.deepEqual(resumirTema(unica), { seen: false, lastStartedAt: null });
});
