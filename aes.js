const AES = require('aes');

var key = '[itp.w~{aa~3p}Yg'.split('').map(e => e.charCodeAt())
var aes = new AES(key);

k = aes.encrypt('mensagem para criptografar');

console.log(k)
