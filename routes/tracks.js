const express = require("express");
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
//const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")

const {getItem, getItems, updateItem, createItem, deleteItem} = require("../controllers/tracks");

router.get("/", authMiddleware, getItems)
router.get("/:id", authMiddleware, validatorGetItem, getItem)
router.post("/", authMiddleware, checkRol(["admin", "user"]), validatorCreateItem, createItem)
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)


module.exports = router;
