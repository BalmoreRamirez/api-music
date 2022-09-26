const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()


/**
 *debes de pasar el token del usuario
 * @param user
 * @returns {Promise<*>}
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: "2h",
        }
    )
    return sign
};

/**
 * debes de pasar el token de session el JWT
 * @param token
 * @returns {Promise<*|null>}
 */
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

const decodeSign = (token) => {
    return jwt.decode(token, null);
};

module.exports = {tokenSign, decodeSign, verifyToken};
