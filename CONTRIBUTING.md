# Contribuir a 480Academy

Escoge una tarea del [backlog](docs/BACKLOG.md), consulta su criterio de aceptación y abre una rama breve desde el `dev` vigente. Si una tarea introduce un contrato compartido, coordina sus entradas, salidas y pruebas con quienes trabajen en los módulos dependientes.

```sh
git fetch origin
git switch dev
git pull --ff-only origin dev
git switch -c feat/TASK-01-catalogo
```

En un clon nuevo, `git switch dev` puede crear el seguimiento de `origin/dev`. Comprueba tu rama antes de editar. Consulta [AGENTS.md](AGENTS.md) y las [convenciones](docs/PROJECT_CONVENTIONS.md).

1. Haz cambios acotados y verifica los casos afectados. Para esta base documental, ejecuta `python3 scripts/check-bootstrap.py` y `git diff --check`.
2. Registra tarea, requisito, comandos y resultados observados en el PR o en [UPDATES.md](docs/UPDATES.md). Identifica limitaciones y añade contexto de relevo si queda trabajo.
3. Integra de forma local los cambios verificados mediante `git merge --no-ff <rama>` sobre `dev`. Para colaboración remota, publica en las ramas autorizadas y usa un PR de destino `dev` con merge commit cuando haga falta revisión. Comprueba que el SHA de la rama queda como ancestro antes de retirar tu rama local integrada. Conserva ramas ajenas o requeridas por un PR abierto.
4. Las propuestas de release se revisan con el Grupo F. La promoción de `dev` a `main` y el despliegue se autorizan explícitamente. Registra el SHA estable, las pruebas críticas y las instrucciones de recuperación.

Cuando falle un control repetible, corrige la causa y considera añadir la comprobación más pequeña que detecte la regresión. Las sesiones recuperan el contexto a partir del repositorio y de evidencias concretas.
