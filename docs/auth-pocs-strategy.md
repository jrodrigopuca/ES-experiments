# Estrategia para PoCs de autenticación

## Decisión

Se mantienen **dos PoCs separadas** para autenticación/autorización:

1. **`react-auth0-poc`**
   - enfocada en proveedor gestionado
   - caso actual: Auth0

2. **`spa-api-jwt-auth-poc`**
   - enfocada en JWT genérica
   - sin dependencia conceptual de un proveedor específico

## Motivo

La PoC actual de Auth0 está bastante acoplada a ese proveedor:

- cliente con `auth0-js`
- flujo de login/logout/callback propio de Auth0
- validación backend con JWKS de Auth0
- uso de claims y convenciones específicas del proveedor

Intentar convertir esa misma carpeta en una PoC “JWT genérica” mezclaría dos objetivos distintos.

## Preguntas que responde cada PoC

### `react-auth0-poc`
¿Cómo integrar un proveedor gestionado de identidad en una SPA + API con JWT, scopes y roles?

### `spa-api-jwt-auth-poc`
¿Cómo implementar autenticación/autorización JWT entre SPA y API sin vendor lock-in y con control total del flujo?

## Beneficio de separarlas

- evita mezclar vendor-specific con fundamentos
- permite comparar complejidad y mantenibilidad
- deja más clara la intención de cada carpeta
- mejora el valor del repo como laboratorio de decisiones técnicas

## Estado esperado

### `react-auth0-poc`
- se mantiene como PoC de proveedor gestionado
- hay que normalizar dependencias, setup y documentación operacional

### `spa-api-jwt-auth-poc`
- nace como PoC nueva
- orientada a JWT genérica
- servirá para comparar con la PoC gestionada

## Próxima revisión sugerida

1. normalizar `react-auth0-poc`
2. definir alcance fino de `spa-api-jwt-auth-poc`
3. implementar la PoC JWT genérica
4. comparar conclusiones entre ambas
