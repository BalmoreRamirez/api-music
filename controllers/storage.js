const fs = require("fs");
const {storageModel} = require("../models");
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../utils/handleError");
const URL_PUBLIC = process.env.URL_PUBLIC;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener el detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_STORAGE");
    }
};

/**
 * Obtener una lista
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_STORAGE");
    }
};

/**
 * crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const {body, file} = req
        console.log(file)
        const fileData = {
            filename: file.filename,
            url: `${URL_PUBLIC}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_STORAGE");
    }
};

/**
 * borrar items
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id)
        // await storageModel.deleteOne(id) borrado fisico
        await storageModel.delete({_id: id}) //borrado logico
        const {filename} = dataFile
        const filePath = `${MEDIA_PATH}/${filename}`
        // fs.unlinkSync(filePath) Borrado fisico
        const data = {
            filePath,
            deleted: 1
        }
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_STORAGE");
    }
};

module.exports = {getItems, getItem, createItem, deleteItem};