const mongoose = require("mongoose");
//const { matchedData } = require("express-validator");
//const { handleHttpError } = require("../utils/handleError");
const { tracksModel } = require("../models");
//const optionsPaginate = require("../config/paginationParams");

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
   const  data = await tracksModel.find({})
    res.send({data})
};

/**
 * crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const {body} = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})

};

/**
 * actualizar items
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
};

/**
 * borrar items
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const id = req.id;
        const findData = await tracksModel.delete({ _id: id });
        const data = {
            findData: findData,
            deleted: true,
        };

        res.send({ data });
    } catch (e) {
        handleHttpError(res, e);
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };