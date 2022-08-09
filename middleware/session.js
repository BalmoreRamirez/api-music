const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJwt");
const {userModel} = require("../models")

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const datatoken = await verifyToken(token)

        if (!datatoken._id) {
            handleHttpError(res, "ERROR_ID_TOKEM", 401)
            return
        }

        const user = await userModel.findById(datatoken._id)
        req.user= user
        next()
    } catch (e) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}


module.exports = authMiddleware