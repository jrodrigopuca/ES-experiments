# Reglas para carpetas en `experiments/`

## Propósito

Este documento define qué debe tener cada carpeta dentro de `experiments/` y cómo revisarla caso por caso.

La idea es simple:

- evitar PoCs huérfanas
- detectar rápido qué falta
- normalizar criterios mínimos
- decidir si una carpeta se mantiene, se mejora, se archiva o se elimina

---

## Regla madre

Cada carpeta en `experiments/` debe justificar su existencia como **PoC**.

Eso significa que tiene que responder, de forma explícita:

1. **qué prueba**
2. **por qué lo prueba**
3. **cómo se ejecuta**
4. **cómo se evalúa si funcionó**

Si no puede responder eso, la carpeta está incompleta o está mal ubicada.

---

## Requisitos mínimos obligatorios

## 1. Nombre de carpeta claro

La carpeta debería usar un nombre orientado a intención, idealmente con sufijo `-poc`.

Ejemplos buenos:

- `api-productos-crud-poc`
- `react-auth0-poc`
- `sequelize-mysql-poc`

Ejemplos flojos:

- `test1`
- `nuevo`
- `demo`
- `cosas-react`

---

## 2. README propio obligatorio

Cada PoC debe tener un `README.md` con, como mínimo:

- Objetivo
- Pregunta que responde
- Tipo
- Stack
- Cómo correrlo
- Criterio de éxito
- Resultado actual
- Próximos pasos

Si falta README, la PoC no está lista para vivir en `experiments/`.

---

## 3. Objetivo concreto

El objetivo no puede ser genérico tipo:

- “probar React”
- “aprender Vue”
- “hacer una app”

Tiene que ser algo más preciso, por ejemplo:

- “validar Auth0 con SPA + API Express”
- “comparar App Router en Next con rutas dinámicas”
- “validar Sequelize con MySQL local para un modelo simple”

---

## 4. Alcance acotado

Una PoC no debería ser un proyecto abierto sin borde.

Tiene que estar claro:

- qué entra en la prueba
- qué no entra
- cuándo deja de ser PoC y pasa a ser otra cosa

---

## 5. Criterio de éxito verificable

La PoC debe tener una forma concreta de evaluar si funcionó.

Ejemplos:

- “la app levanta y las rutas responden”
- “el login entrega token y el backend valida JWT”
- “Sequelize conecta y sincroniza el modelo”

Sin criterio de éxito, no hay validación: sólo actividad.

---

## 6. Estado actual declarado

Cada carpeta debería decir claramente si está:

- `pendiente`
- `funcional`
- `parcial`
- `descartada`
- `archivable`

No hace falta usar esos labels exactos, pero sí dejar clara la situación actual.

---

## 7. Forma de ejecución reproducible

La PoC tiene que poder correrse con instrucciones concretas.

Como mínimo:

- dependencias necesarias
- comando de arranque
- puertos relevantes si aplica
- variables de entorno si aplica
- prerequisitos externos si aplica (ej: MySQL, Auth0, etc.)

Si levantarla depende de conocimiento implícito, todavía no está prolija.

---

## 8. Configuración consistente

Si existe `package.json`, debería revisarse que:

- `name` tenga sentido con la PoC
- scripts existentes sean reales
- no haya scripts rotos o dependencias faltantes
- el nombre del paquete no contradiga el nombre de carpeta

No hace falta obsesionarse con perfección, pero sí evitar contradicciones obvias.

---

## 9. Señales de deuda visibles

Si una PoC tiene limitaciones relevantes, deberían quedar documentadas:

- falta `.env.example`
- config hardcodeada
- dependencias implícitas
- setup externo manual
- falta persistencia o tests

La deuda no es problema. El problema es que quede invisible.

---

## 10. Decisión futura explícita

Cada PoC debería dejar encaminada una decisión posterior:

- continuar
- refinar
- comparar con otra alternativa
- archivar
- migrar
- descartar

Una PoC sin salida definida suele quedarse congelada.

---

## Checklist de revisión caso por caso

Cuando revisemos una carpeta, usar esta lista:

### Identidad
- [ ] ¿el nombre de la carpeta expresa la intención de la PoC?
- [ ] ¿el tipo está claro? (frontend, backend, full-stack, integración, etc.)

### Objetivo
- [ ] ¿el objetivo es concreto?
- [ ] ¿la pregunta que responde está bien formulada?
- [ ] ¿el alcance está acotado?

### Documentación
- [ ] ¿tiene `README.md`?
- [ ] ¿explica cómo correrla?
- [ ] ¿explica criterio de éxito?
- [ ] ¿declara resultado actual?
- [ ] ¿declara próximos pasos?

### Ejecución
- [ ] ¿hay comandos claros para levantarla?
- [ ] ¿los prerequisitos externos están documentados?
- [ ] ¿las variables de entorno requeridas están documentadas?

### Consistencia técnica
- [ ] ¿el `package.json` está alineado con el nombre de la carpeta?
- [ ] ¿los scripts parecen correctos?
- [ ] ¿hay dependencias usadas pero no declaradas?
- [ ] ¿hay config hardcodeada que debería exponerse?

### Decisión
- [ ] ¿esta PoC merece seguir en `experiments/`?
- [ ] ¿debería archivarse?
- [ ] ¿debería refinarse antes?

---

## Resultado esperado de cada revisión

Después de revisar una carpeta, deberíamos poder concluir una de estas acciones:

1. **Mantener como está**
2. **Mantener pero normalizar**
3. **Mantener pero documentar mejor**
4. **Archivar**
5. **Eliminar**

---

## Orden sugerido de revisión

Cuando revisemos una PoC, hacerlo en este orden:

1. revisar objetivo de carpeta
2. revisar README
3. revisar `package.json`
4. revisar comandos de ejecución
5. revisar variables/config externa
6. revisar limitaciones actuales
7. tomar decisión: mantener, ajustar, archivar o eliminar

---

## Criterio de salida de `experiments/`

Una carpeta debería salir de `experiments/` si:

- dejó de tener valor como PoC activa
- nunca terminó de definir su objetivo
- es más educativa que experimental
- quedó obsoleta frente a otra PoC mejor
- no se puede correr ni entender con esfuerzo razonable

En esos casos:

- si aún aporta contexto → `archive/`
- si no aporta nada → eliminar
