# Propuesta concreta de limpieza y orden del repo

## Objetivo

Si el objetivo real de `ES-experiments` es **experimentación técnica**, entonces el repo debería optimizarse para esto:

- probar ideas rápido
- comparar stacks o herramientas
- tener prototipos chicos y autocontenidos
- tener PoCs con hipótesis u objetivo explícito
- evitar mezclar material histórico/educativo con experimentos activos

Hoy el repo mezcla tres cosas distintas:

1. **experimentos ejecutables**
2. **templates o bases de framework**
3. **apuntes/curso/material educativo**

Ese mix no está mal para crecer, pero después se vuelve ruido. Y ahí es donde conviene ordenar.

---

## Recomendación principal

### Mantener este repo sólo para:

- experimentos técnicos
- PoCs con objetivo claro
- pruebas de frameworks
- prototipos pequeños
- sandboxes de arquitectura o tooling

### Sacar de este repo, gradualmente:

- apuntes de cursos
- material puramente educativo
- ejercicios guiados tipo curso
- demos históricas que ya no aportan a la experimentación activa

En criollo: **este repo debería parecer un laboratorio de PoCs, no una carpeta de estudio general**.

---

## Sub-objetivo explícito: cada experimento debe justificar su existencia

Acá está la parte importante: un experimento sin una pregunta a responder es sólo una carpeta ocupando espacio.

Entonces, de ahora en adelante, cada experimento debería existir para validar algo concreto. Por ejemplo:

- “probar App Router vs Pages Router en Next”
- “evaluar Auth0 para auth en SPA + API”
- “comparar Vue 3 vs Next en velocidad de arranque de una demo simple”
- “validar Sequelize con MySQL local para un modelo simple”

Si una carpeta no puede responder fácilmente a la pregunta **‘qué estoy probando acá y por qué’**, probablemente no debería estar en este repo.

---

## Definición práctica de PoC para este repo

Una carpeta dentro de `ES-experiments` debería cumplir al menos estas 4 condiciones:

1. **Objetivo explícito**  
   Debe quedar claro qué hipótesis, integración o tecnología se está probando.

2. **Alcance acotado**  
   No debería ser una app abierta “para ver qué sale”, sino una prueba con borde claro.

3. **Criterio de éxito**  
   Tiene que poder decirse cuándo la prueba salió bien. Ejemplo: “logré autenticar un usuario con Auth0”, “logré levantar Sequelize contra MySQL local”.

4. **Documentación mínima**  
   Cada experimento debería tener un README propio con:
   - objetivo
   - stack
   - cómo correrlo
   - qué se concluyó o qué falta

Sin eso, no es PoC. Es carpeta huérfana.

---

## Clasificación propuesta por carpeta

## 1) Mantener en este repo

Estas carpetas sí encajan con la idea de experimentación:

### `api-productos/`
- Motivo: demo técnica concreta de API Express.
- Acción: **mantener**.
- Recomendación: moverla a `experiments/` con un nombre que refleje mejor su objetivo.

### `hinext/`
- Motivo: exploración de Next.js.
- Acción: **mantener**.
- Recomendación: documentar qué se está probando hoy y limpiar restos históricos si hace falta.

### `hiVue/`
- Motivo: sandbox de Vue 3 + Vite.
- Acción: **mantener**.

### `hiMalina/`
- Motivo: aunque está muy starter, sigue siendo experimento de framework.
- Acción: **mantener o archivar dentro del mismo repo**.
- Criterio: si ya no te interesa Malina, archivarlo adentro del repo; si todavía querés comparar frameworks, mantenerlo.

### `seq/`
- Motivo: experimento técnico de Express + Sequelize + MySQL.
- Acción: **mantener si lo querés retomar**.
- Si no pensás volver pronto, mejor archivarlo dentro del repo.

### `security/security-react/react-auth0/`
- Motivo: experimento técnico concreto de auth.
- Acción: **mantener**, pero idealmente desacoplado del material teórico.

---

## 2) Migrar a otro repo (recomendación fuerte)

Estas carpetas tienen más ADN de aprendizaje que de experimento activo.

### `react-course/`
- Motivo: curso, ejercicios, apuntes, proyectos guiados.
- Acción: **migrar a un repo educativo**.
- Nombre sugerido:
  - `frontend-learning-lab`
  - `react-learning-notes`
  - `courses-and-practice`

### `essencial/`
- Motivo: fundamentos Node.js y ejemplos didácticos.
- Acción: **migrar a repo educativo**.

### `security/security-node/`
- Motivo: scripts y apuntes pedagógicos de seguridad.
- Acción: **migrar a repo educativo o security-lab separado**.

### `security/security-react/README.md`
- Motivo: el README es valioso, pero es contenido más educativo que experimental.
- Acción: **migrar junto al material de seguridad** o convertirlo en documentación de un repo dedicado.

### `react-course/project0/`, `project1/`, `Contacts/`
- Motivo: son ejercicios de aprendizaje, incluso si alguno está bastante bien.
- Acción: **migrar con `react-course/`**, no dejarlos partidos.

---

## 3) Eliminar

### `hiMalina-f/`
- Motivo: carpeta vacía, sin setup, sin intención visible, sin valor actual.
- Acción: **eliminar**.

---

## Estructura objetivo recomendada

Si te quedás con este repo como laboratorio, yo lo dejaría así:

```text
ES-experiments/
  README.md
  docs/
    repository-status/
  experiments/
    api-productos-crud-poc/
    sequelize-mysql-poc/
    next-app-router-poc/
    vue3-vite-poc/
    malina-starter-poc/
    react-auth0-poc/
    fullstack-auth-flow-poc/
  archive/
    deprecated/
      ...
```

## Traducción práctica de esa estructura

- `experiments/` = lo que todavía representa valor experimental
- `archive/` = experimentos viejos que no querés borrar todavía
- afuera de este repo = material educativo puro
- nombres con sufijo `-poc/` = fuerzan a declarar intención y evitar carpetas ambiguas
- no se separa primero por frontend/backend porque la unidad organizativa principal es la PoC completa

---

## Plantilla mínima para cualquier experimento nuevo

Cada nueva carpeta debería nacer con un `README.md` parecido a esto:

```md
# <nombre-del-experimento>

## Objetivo
Validar...

## Pregunta que responde
¿...?

## Stack
- ...

## Tipo
- frontend / backend / full-stack / tooling / security / integración

## Cómo correrlo
- ...

## Criterio de éxito
- ...

## Resultado actual
- pendiente / exitoso / descartado

## Próximos pasos
- ...
```

Esto parece burocracia, pero no. Es lo que evita que el repo se llene de pruebas sin contexto.

---

## Propuesta concreta por fases

## Fase 1 — Limpieza inmediata

Cambios de bajo riesgo:

1. **Eliminar `hiMalina-f/`**
2. agregar este criterio al `README.md` raíz:
   - qué entra al repo
   - qué no entra al repo
   - qué se considera PoC válida
3. crear una convención de carpetas:
   - `experiments/<nombre-del-poc>`
   - `archive/`

### Resultado esperado

Menos ruido visual y mejor intención del repo.

---

## Fase 2 — Separación interna sin migrar todavía

Antes de abrir otros repos, podés hacer una limpieza intermedia:

### Mantener activos
- `api-productos/`
- `hinext/`
- `hiVue/`
- `seq/` (si sigue vivo)
- `security/security-react/react-auth0/`

### Mover a `archive/`
- `hiMalina/` (si ya no lo tocás)
- `seq/` (si no lo retomás)

### Mover a `learning/` temporalmente
- `essencial/`
- `react-course/`
- `security/security-node/`
- `security/security-react/README.md` como material teórico

Si hacés esta fase, la estructura queda más clara sin necesidad inmediata de otro repo.

---

## Fase 3 — Migración a repos separados

Acá está la decisión más sana si querés bajar entropía de verdad.

### Repo nuevo sugerido: aprendizaje

Ejemplo:

```text
learning-lab/
  node-fundamentals/
    essencial/
  react-course/
  react-native-notes/
  security-notes/
    security-node/
    security-react-docs/
```

### Repo actual quedaría enfocado en:

```text
ES-experiments/
  experiments/
    <poc-1>/
    <poc-2>/
    <poc-3>/
```

Y listo. Mucho más coherente.

---

## Decisión recomendada por carpeta

| Carpeta actual | Acción recomendada | Prioridad | Motivo |
| --- | --- | --- | --- |
| `api-productos/` | Mantener | Alta | Experimento backend claro |
| `essencial/` | Migrar | Alta | Material educativo |
| `hiMalina-f/` | Eliminar | Alta | Vacía/no aporta |
| `hiMalina/` | Mantener o archivar | Media | Sandbox de framework |
| `hinext/` | Mantener | Alta | Experimento vigente de framework |
| `hiVue/` | Mantener | Alta | Experimento vigente de framework |
| `react-course/` | Migrar | Alta | Curso y práctica guiada |
| `security/security-node/` | Migrar | Alta | Apunte/lab educativo |
| `security/security-react/react-auth0/` | Mantener | Media | Experimento técnico útil |
| `security/security-react/README.md` | Migrar o separar docs | Media | Material más teórico |
| `seq/` | Mantener o archivar | Media | Prototipo técnico retomable |

---

## Criterio operativo para el futuro

Antes de crear una carpeta nueva en este repo, validar estas preguntas:

1. **¿Esto es un experimento técnico autocontenido?**
2. **¿Lo quiero correr, comparar o prototipar?**
3. **¿Tiene una hipótesis u objetivo concreto?**
4. **¿Tiene valor como laboratorio, no sólo como apunte?**

Si la respuesta es “no”, probablemente **no debería entrar acá**.

## Regla simple

### Sí entra
- PoC de framework
- demo de arquitectura
- benchmark chico
- experimento de librería
- integración puntual
- prototipo con objetivo explícito

### No entra
- apuntes largos de curso
- ejercicios guiados básicos
- documentación teórica suelta
- carpetas vacías “para después”
- pruebas sin objetivo declarado

---

## Mi recomendación final

Si querés una decisión concreta, no tibia, sería esta:

### Hacer ahora
- eliminar `hiMalina-f/`
- declarar este repo como **laboratorio de experimentación**
- declarar además que **todo experimento debe ser una PoC con objetivo explícito**
- preparar migración de `essencial/`, `react-course/` y `security/security-node/`

### Mantener acá
- `api-productos/`
- `hinext/`
- `hiVue/`
- `hiMalina/` (si aún te interesa)
- `seq/` (si lo vas a retomar)
- `security/security-react/react-auth0/`

### Sacar de acá en la próxima ronda
- todo lo que sea curso, apunte o material pedagógico puro

Ese recorte te deja un repo MUCHO más coherente con el objetivo que describiste.
