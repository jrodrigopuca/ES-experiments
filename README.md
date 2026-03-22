# ES-experiments

Repositorio personal de **experimentación técnica**.

La idea de este repo NO es guardar cualquier proyecto suelto, curso o apunte. La idea es mantener un **laboratorio de PoCs**: pruebas chicas, concretas y autocontenidas para validar tecnologías, enfoques o integraciones.

---

## Propósito

Este repo existe para:

- probar ideas rápido
- validar integraciones
- comparar frameworks o herramientas
- explorar decisiones técnicas con alcance acotado
- documentar resultados de PoCs

En una frase:

> este repo guarda **experimentos con objetivo explícito**, no material educativo general.

---

## Qué es una PoC en este repo

Para que un experimento tenga sentido acá, debería responder claramente:

1. **¿Qué estoy probando?**
2. **¿Por qué lo estoy probando?**
3. **¿Cómo sé si salió bien o no?**

Si no puede responder eso, probablemente no debería vivir en este repositorio.

### Requisitos mínimos de una PoC

Cada experimento debería tener:

- **objetivo explícito**
- **alcance acotado**
- **criterio de éxito**
- **README propio** con contexto mínimo

Sin eso, no es una PoC: es una carpeta huérfana.

---

## Qué entra en este repo

- PoCs de frameworks
- pruebas de arquitectura
- experimentos de integración
- sandboxes técnicos
- prototipos chicos para validar una idea
- comparativas entre stacks o herramientas

## Qué NO entra en este repo

- apuntes largos de cursos
- ejercicios guiados puramente educativos
- documentación teórica sin experimento asociado
- carpetas vacías “para después”
- proyectos sin objetivo definido
- material de aprendizaje que encaje mejor en otro repositorio

---

## Estructura objetivo

```text
ES-experiments/
  README.md
  docs/
    repository-status/
  experiments/
    <poc-1>/
    <poc-2>/
    <poc-3>/
  archive/
```

### Intención de cada carpeta

- `experiments/`: PoCs activas o vigentes
- `archive/`: experimentos viejos que se conservan como referencia
- `docs/repository-status/`: documentación de estado, orden y limpieza del repo

No se separa primero por frontend/backend/security porque una PoC puede ser:

- frontend
- backend
- full-stack
- auth
- tooling
- integración

La unidad principal de organización acá es la **PoC**, no la capa técnica.

---

## Convención recomendada para nuevos experimentos

Idealmente, cada carpeta nueva debería tener un nombre que ya explique intención. Ejemplos:

- `next-app-router-poc`
- `vue3-vite-poc`
- `api-productos-crud-poc`
- `sequelize-mysql-poc`
- `react-auth0-poc`
- `fullstack-auth-flow-poc`

La idea es evitar nombres ambiguos o demasiado genéricos.

---

## Plantilla mínima para un experimento nuevo

Cada PoC debería incluir un `README.md` parecido a esto:

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

Esto no es burocracia. Es contexto mínimo para que la carpeta tenga sentido dentro del laboratorio.

---

## Regla de decisión rápida

Antes de agregar algo a este repo, validar:

- ¿esto es un experimento técnico autocontenido?
- ¿tiene una hipótesis o pregunta concreta?
- ¿lo quiero ejecutar, comparar o validar?
- ¿tiene valor como PoC y no sólo como apunte?

Si la respuesta es **no**, entonces probablemente debería:

- ir a otro repo de aprendizaje
- archivarse
- o no crearse directamente acá

---

## Estado y propuesta de orden

La documentación de estado actual y la propuesta de limpieza están en:

- `docs/repository-status/README.md`
- `docs/repository-status/repo-cleanup-proposal.md`

---

## Dirección actual

La intención es dejar este repo cada vez más alineado a esta regla:

> **un experimento sin objetivo explícito no justifica su existencia en este repo**

Eso implica:

- mantener PoCs reales
- archivar lo histórico que todavía aporte valor
- migrar el material educativo a otro repositorio
- eliminar carpetas que no aporten contexto ni validación técnica
