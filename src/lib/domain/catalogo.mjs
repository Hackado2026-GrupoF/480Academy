export const AVISO_CURSO_BLOQUEADO =
  'Para acceder a este curso necesitas adquirirlo. Las compras no están disponibles en esta demostración';

function compararId(a, b) {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
}

function compararFechaReciente(a, b) {
  if (a == null) return b == null ? 0 : 1;
  if (b == null) return -1;
  return Date.parse(b) - Date.parse(a);
}

function compararCanonico(a, b) {
  return a.position - b.position || compararId(a, b);
}

function ordenarConInteres(entradas, compararRespaldo) {
  if (entradas.every(({ interest }) => Number.isFinite(interest))) {
    return entradas.sort((a, b) => b.interest - a.interest || compararRespaldo(a, b));
  }
  return entradas.sort(compararRespaldo);
}

function grupoDelCurso(curso) {
  if (curso.mayEdit) return 1;
  if (curso.publishedAt == null) return null;
  if (curso.isWelcome && curso.visitedAt == null) return 2;
  if (curso.isWelcome || curso.hasReadGrant) return curso.visitedAt == null ? 4 : 3;
  return 5;
}

export function proyectarCatalogo(cursos) {
  const grupos = [[], [], [], [], []];
  for (const curso of cursos) {
    const grupo = grupoDelCurso(curso);
    if (grupo !== null) grupos[grupo - 1].push(curso);
  }

  const [edicion, bienvenida, visitados, concedidos, bloqueados] = grupos;
  edicion.sort((a, b) =>
    compararFechaReciente(a.visitedAt, b.visitedAt) ||
    compararFechaReciente(a.publishedAt ?? a.createdAt, b.publishedAt ?? b.createdAt) ||
    compararId(a, b),
  );
  bienvenida.sort(compararId);
  visitados.sort((a, b) => compararFechaReciente(a.visitedAt, b.visitedAt) || compararId(a, b));
  ordenarConInteres(concedidos, (a, b) =>
    compararFechaReciente(a.grantedAt, b.grantedAt) || compararId(a, b),
  );
  ordenarConInteres(bloqueados, (a, b) =>
    compararFechaReciente(a.publishedAt, b.publishedAt) || compararId(a, b),
  );

  return grupos.flatMap((cursosDelGrupo, indice) => {
    const group = indice + 1;
    const access = group === 1 ? 'edit' : group === 5 ? 'blocked' : 'read';
    const action = access === 'blocked' ? 'notice' : 'open';
    return cursosDelGrupo.map(({ id }) => ({ id, group, access, action }));
  });
}

function indiceUltimoInicio(pendientes) {
  let indice = -1;
  for (const [i, unidad] of pendientes.entries()) {
    if (unidad.lastStartedAt == null) continue;
    if (indice === -1) {
      indice = i;
      continue;
    }

    const anterior = pendientes[indice];
    const orden = compararFechaReciente(unidad.lastStartedAt, anterior.lastStartedAt) ||
      compararCanonico(unidad, anterior);
    if (orden < 0) indice = i;
  }
  return indice;
}

export function resumirTema(videos) {
  const pendientes = videos.filter(({ seen }) => !seen);
  const indice = indiceUltimoInicio(pendientes);
  return {
    seen: videos.length > 0 && pendientes.length === 0,
    lastStartedAt: pendientes[indice]?.lastStartedAt ?? null,
  };
}

function ordenarAdaptativo(unidades) {
  const pendientes = [];
  const vistas = [];
  for (const unidad of unidades) {
    (unidad.seen ? vistas : pendientes).push(unidad);
  }

  const indice = indiceUltimoInicio(pendientes);
  const continuacion = indice === -1 ? [] : pendientes.splice(indice, 1);
  return [
    ...continuacion,
    ...ordenarConInteres(pendientes, compararCanonico),
    ...vistas.sort(compararCanonico),
  ];
}

export function ordenarLista(mode, unidades) {
  if (mode !== 'fixed' && mode !== 'adaptive') {
    throw new RangeError('El modo de la lista debe ser fixed o adaptive.');
  }

  const ordenadas = mode === 'fixed'
    ? [...unidades].sort(compararCanonico)
    : ordenarAdaptativo(unidades);

  return ordenadas.map(({ id, position, title, seen }, indice) => {
    const visualPosition = indice + 1;
    const fila = { id, position, title, seen, visualPosition };
    if (mode === 'fixed') fila.ordinal = visualPosition;
    return fila;
  });
}
