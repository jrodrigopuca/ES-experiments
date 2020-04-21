const crypto= require('crypto')
const password = 'myPassword'

/**
 * Haciendo pass inseguras
*/

const hash= crypto.createHash('md5')
hash.update(password)
console.log("md5", hash.digest('hex')) // deb1536f480475f7d593219aa1afd74c
// des-encriptado en: https://hashtoolkit.com/decrypt-hash/?hash=deb1536f480475f7d593219aa1afd74c

const sha = crypto.createHash('sha256')
sha.update(password)
console.log("sha256", sha.digest('hex'))
// des-encriptado en https://hashtoolkit.com/decrypt-hash/?hash=76549b827ec46e705fd03831813fa52172338f0dfcbd711ed44b81a96dac51c6



/**
 * Haciendo pass seguras con PBKDF2
 * uso el sync, el async permite tener un callback
 * en el ejemplo tendremos una pass:
 * - que utilice una sal o valor de entrada
 * - 100000 iteraciones del algoritmo
 * - una longitud de 512 bytes
 * - se usa como algoritmo base sha512
 * 
*/

const salt = crypto.randomBytes(256).toString('hex'); //256 es la cant de bytes 
const iterations = 100000;
const bytesReturns = 512;
const hashBasis= 'sha512';
const hashedPwd = crypto.pbkdf2Sync(password, salt, iterations, bytesReturns, hashBasis);
console.log('pbkdf2 ',hashedPwd.toString('hex'));
// a7760e2382561839d798c39d3541551751896f10be3bd3625cdc295a07d7ae70d35a33ec16b63ba64e897bf6169ae1222464b633cbf3e8e290515b1759955b471a13407b86299abbdc57e6c814a2ca932e0a4e99f048c7f096e3754b271411a17d390369339fbafdeb8c01f50fd83910f8dfea49928ed6e79158f5d659fbfdf18fca6354944d2bfdc7755b4e7736226616466d1a6ac877112336023e353a52a5e4aac22cefa77dbf6d12060a1f2200706fab5b29bd260bacd234f6dd26cc85bfaf92bdbe9d46ec0a084131d3ad4b300d2910882b78b5257e506243b4e3b8f9330a22b6ef52881c3a652138138fd35110e791e2ac884a0d7a1ec3cfe8a9c2fe14c4f6652fe55b34b0200ed0677d9be633277836cf5f9230e54916e946efbaca394baafff9ddda36109a95ccea865abe20c6f28eb05f307294753db34aba4bb8f460b3004b98b517e05d00299f203fe5233cd03ade22a086868e4326f9ed0b60d2ebdc19b432666efd56f9f6ae6d511ded1ec04400bc2e68afbf695c8658209939284c4a14fcb08ff31b58035c3dbafbbc1311a83169260a0bb4f2911358c49e4f7ae4d9e9040aecb63e385841f6663c1d0122e1007308eac3e0cbfbdf56a3c79fea4a2fa4c860d392a32f72bc59a887d8e2012020eb2f335aca4f80eb75c3a4bf3deef45c28b9ca3546a4706d58e23382abb2f327124a7c7c0678c97382f0141c


