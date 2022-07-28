const express = require("express");
const router = express.Router();
const {validatorCreateItem} = require("../validators/tracks")
const { getItem,getItems, updateItem, createItem,deleteItem} = require("../controllers/tracks");

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", validatorCreateItem, createItem)
router.put("/", updateItem)
router.delete("/:id", deleteItem)


module.exports = router;
