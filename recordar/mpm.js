function sizeQR(version){
    return ((version-1)*4)+21;
}

function darkModule(version){
    return [((version*4)+9),8]
}


// sizeQR(32)   145
/**
 * patrón de búsqueda (7-5-3):
 * - superior iqz: 0,0
 * - superior der: sizeQR-1-7,0
 * - inferior izq: 0, sizeQR-7-1
 * 
 * patrón de alineación (5-3-1)
 * https://www.thonky.com/qr-code-tutorial/alignment-pattern-locations
 * a partir de la versión 2 son necesarios
 * a partir de la versión 7 pueden ser más de uno
 * 
 * Patrones de sincronización (1-0-1-0): 
 * dos lineas: una horizontal y otra vertical
 * 
 * modulo dark: es un cuadrado oscuro su posición es determinada por la función darkModule
 * 
 * Area de formato de información: cerca de los patrones de búsqueda
 * Area de Información de Versión: son bloques de 6x3 y de 3x6 que aparecen a partir de la v7
 * 
 * Máscaras 
 * https://www.thonky.com/qr-code-tutorial/mask-patterns
 */

