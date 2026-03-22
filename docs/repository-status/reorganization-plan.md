# Plan de reorganización hacia `/experiments`

## Criterio aplicado

Se usa esta regla:

- **`experiments/`**: PoCs activas o con objetivo técnico suficientemente claro
- **`archive/`**: material histórico, educativo, o PoCs débiles/inactivas

La unidad principal de organización es la **PoC completa**, no si es frontend o backend.

## Mapeo propuesto

| Origen | Destino | Motivo |
| --- | --- | --- |
| `api-productos/` | `experiments/api-productos-crud-poc/` | API CRUD simple con objetivo claro |
| `hinext/` | `experiments/next-app-router-poc/` | Exploración concreta de Next |
| `hiVue/` | `experiments/vue3-vite-poc/` | Sandbox claro de Vue 3 + Vite |
| `seq/` | `experiments/sequelize-mysql-poc/` | PoC técnica de Sequelize + MySQL |
| `security/security-react/react-auth0/` | `experiments/react-auth0-poc/` | PoC concreta de auth SPA + API |
| `hiMalina/` | `archive/inactive-pocs/malina-starter-poc/` | Starter técnico con poca evolución |
| `essencial/` | `archive/learning-candidates/node-fundamentals-notes/` | Material educativo de Node |
| `react-course/` | `archive/learning-candidates/react-course-learning-lab/` | Curso y práctica guiada |
| `security/security-node/` | `archive/learning-candidates/security-node-learning-lab/` | Laboratorio pedagógico de seguridad |
| `security/security-react/` | `archive/learning-candidates/security-react-notes/` | Documentación teórica restante luego de extraer la PoC |
| `hiMalina-f/` | eliminado | Carpeta vacía |

## Resultado esperado

```text
ES-experiments/
  README.md
  docs/
    repository-status/
  experiments/
    api-productos-crud-poc/
    next-app-router-poc/
    vue3-vite-poc/
    sequelize-mysql-poc/
    react-auth0-poc/
  archive/
    inactive-pocs/
      malina-starter-poc/
    learning-candidates/
      node-fundamentals-notes/
      react-course-learning-lab/
      security-node-learning-lab/
      security-react-notes/
```

## Notas

- `docs/repository-status/` preserva el relevamiento previo a la reorganización.
- Algunos experimentos activos todavía necesitarán mejorar su `README.md` propio para cumplir por completo la nueva convención del repo.
