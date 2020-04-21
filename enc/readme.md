## Criptografia
hay 4 formas para implementar:
- proteger passwords
- proteger data del resto (db)
- protegiendo data en tránsito 
- doble factor de autenticación

## Herramientas
- Cipther/Decipher
- DiffieHellman/ECDH
- Hash
- HMAC: Para proteger los datos en tránsito
- Sign/Verify
- Crypto methods

## Motivos para proteger las contraseñas
- Son muy faciles: la gente elige contraseñas muy débiles que son fáciles de recordar
- Duplicación: La gente tiende a usar las mismas contraseñas en múltiples sitios
- Ruptura: Las contraseñas pueden ser robadas por atacantes

## Buenos algoritmos hash
- Argon: creado en 2013, es bueno para nuevas aplicaciones
- PBKDF2: Password-Based Key Derivation Function 2, trabaja especificamente basado en un mensaje de autenticación repetidamente sobre una contraseña y una sal para generar una salida.
- scrypt: es un algoritmo optimizado para resistir a ataques realizados con hardware, incrementando la cantidad de memoria requerida para generar la salida, eso disminuye la habilidad de ataques por fuerza bruta con hardware especial o con tarjetas graficas o formas sofisticadas
- bcrypt: es un algoritmo popular para "hashing" passwords basado en el algoritmo Blowfish, tiene soporte para múltiples lenguajes.

Otros algoritmos: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

## Desafios
- Confidencialidad: solo mostrar los datos correctos a las personas correctas
- Integridad: Los datos no deberían ser cambiados por alguien inautorizado o sin registro. 
- Disponibilidad: Los datos deben estar cuando se necesiten

## Encriptación Simetrica
- Una clave: La misma clave para encriptar-desencriptar
- convierte al dato en no-legible: si tu no tienes la clave, tu no puedes leerlo.

## Herramientas para Encriptación Simétrica
- Crypto.createCipheriv: función para crear instancias de la clase de encripción simétrica (Cypher) usando el algoritmo que especifiques. El 'iv' corresponde a vector de inicio.
- Update/Final: una vez que la instancia es creada se utiliza estas funciones para actualizar el dato (update) y para encriptarlo (final) 


