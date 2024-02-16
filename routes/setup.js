const express = require("express");
const { CreateItems, ReadItems, UpdateItems, DeleteItem } = require("../controllers/itemscrud");
const router = express.Router();

//redis-crud

router.route("/create-item").post(CreateItems);
router.route("/read-item").post(ReadItems);
router.route("/update-item").post(UpdateItems);
router.route("/delete-item").post(DeleteItem);

module.exports = router;
