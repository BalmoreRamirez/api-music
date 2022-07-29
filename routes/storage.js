const express = require("express");
const router = express.Router();
const {validatorGetItem} = require("../validators/storage")
const uploadMiddleware = require("../utils/handleStorage")
const {createItem, getItem, getItems, updateItem, deleteItem} = require("../controllers/storage")

// Routes
router.post("/", uploadMiddleware.single("myfile"), createItem)
router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router;