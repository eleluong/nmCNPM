const hash = require('./app/config/hash');
const bcrypt = require('bcrypt')

console.log(hash.hash('123456'))
console.log(!bcrypt.compare('123456', '$2b$10$U9wcMKCX3svBld36Yy8scOGGl8fFIXtACPF/pxSZ1QtT9eATejJ4e'))