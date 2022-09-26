const mongoose = require("mongoose");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { tracksModel } = require("../models");


/**
 * Obtener el detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await tracksModel.findOneData(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

/**
 * Obtener una lista
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const user = req.user
        const data = await tracksModel.findAllData({})
        res.send({ data, user })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
};

/**
 * crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req) //clear more data info
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_POST_ITEMS")
    }
};

/**
 * actualizar items
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req) //clear more data info
        const data = await tracksModel.findOneAndUpdate(
            id, body
        )
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS")
    }
};

/**
 * borrar items
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {

    try {
        req = matchedData(req)
        const { id } = req
        // const data = await tracksModel.deleteOne({_id:id}) borrado fisico
        const data = await tracksModel.delete({ _id: id }) // borrado logico
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }

};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };