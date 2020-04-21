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

Ejemplo: 02-encriptarData.js

## Almacenando Claves de forma segura
- Si un atacante encuentra las claves, se termina la seguridad
- Existen KMS (sistemas robustos de gestión de claves)
- Buenas práctias para almacenar claves:
    - Usar 'key store' para proteger las claves. Una 'key store' es una pieza de software que almacena tus claves encriptandolas.
    - Encriptar las claves encriptandolás con una master key o clave maestra
    - Cuando un cliente necesita acceder a un dato, la 'key store' preguntará por una clave
    - La 'key store' desencriptará la clave y luego la enviará de vuelta al cliente para lo que se necesite.
    - Las claves pueden rotar regularmente para mayor seguridad

Ejemplos: en AWS es Ket Managment Service y en MS Azure es Key Vault o el software Vault

## Problemas con los datos mientras son transmitidos
También llamados 'en transito' osea cuando viajan de un computadora a otra, los problemas son:
- Alguien puede ver/cambiarlos: Los atacantes ven los datos mientras las dos partes lo intercambian
- Imitación o 'impersonation': el atacante pretende ser otra persona.
La forma más común se llama ataque 'man-in-the-middle' en la cual el atacante se pone en el medio de la comunicación viendo o alterando el contenido a comunicar.

## Combatir problemas en la transmisión
- Encriptación asimetrica: Encriptar con una clave, desencriptar con otra.
- HMAC (hash-based message authentication code): Herramienta para saber si algo ha cambiado, tomando los datos del mensaje y con eso creando una clave; la clave es enviado a la otra parte durante la comunicación permitiendo que luego se pueda comprobar si algo fue alterado.
- Firma digital: Verifica autenticidad e integridad usando encriptación asimetrica y hashing al documento a la vez.

## Factor
Es un mecanismo usado para identificación, hay tres factores para elegir en un esquema de autenticación: 
- Algo que tu conoces: contraseña, es algo que tu conoces pero nadie más debería saberlo.
- Algo que tú tienes: Badge, ID Card, Token. Esto es un objeto fisico en posesión del usuario.
- Algo que tu eres: Es comúnmente referido a los datos biométricos y el uso de los atributos biológicos de una persona para identificarlo, un ejemplo común es el Apple Touch ID (con el lector de huella identifica al usuario.

## TOTP
Significa "time-based one time password" es una popular forma de 2FA
- un secreto es compartido entre el servidor y el usuario
- el secreto es usado para generar un número (este no puede ser repetido y cambia rápidamente cada 30s aprox)
- el número generado es otra entrada además del password
para implementarlo se puede usar Speakeasy en NodeJS, ejemplo 05-dobleF.js




