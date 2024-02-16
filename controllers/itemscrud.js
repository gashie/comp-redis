const asyncHandler = require("../middleware/async");
const { sendResponse } = require("../helper/utilfunc");
const itemModel = require("../models/items");


exports.CreateItems = asyncHandler(async (req, res, next) => {

    const { key, value } = req.body;
    await itemModel.create(key, value);
    return sendResponse(res, 1, 200, "Item created")

})
exports.ReadItems = asyncHandler(async (req, res, next) => {

    const { key } = req.body;
    const item = await itemModel.read(key);
    if (!item) {
        return sendResponse(res, 0, 200, `Sorry, no record found for this key ${key}`)
    }
    return sendResponse(res, 1, 200, `Item found for key ${key}`, item)


})
exports.UpdateItems = asyncHandler(async (req, res, next) => {

    const { key,value } = req.body;
    await itemModel.update(key, value);
    return sendResponse(res, 1, 200, "Item updated")


})

exports.DeleteItem = asyncHandler(async (req, res, next) => {

    const { key } = req.body;
    await itemModel.delete(key);
    return sendResponse(res, 1, 200, "Item deleted")


})