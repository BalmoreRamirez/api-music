
const { storageModel } = require("../models");
const URL_PUBLIC = process.env.URL_PUBLIC;

/**
 * Obtener el detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {};

/**
 * Obtener una lista
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
   const  data = await storageModel.find({})
    res.send({data})
};

/**
 * crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const {body, file} = req
    console.log(file)
    const fileData={
        filename:file.filename,
        url:`${URL_PUBLIC}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};

/**
 * actualizar items
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {};

/**
 * borrar items
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };