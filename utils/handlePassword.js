const bcryptjs = require("bcryptjs")
/**
 *
 * @param textPlain
 * @returns {Promise<*>}
 */
const encrypt = async (textPlain) => {
    const hash = await bcryptjs.hash(textPlain, 10);
    return hash;
}
/**
 * Pasar contraseña sin encrptar y pasar contraseña encriptada
 * @param passwordPlain
 * @param hashPassword
 * @returns {Promise<*>}
 */

const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {encrypt, compare}