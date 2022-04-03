// External Dependancies
const mongoose = require('mongoose')

//Define Item Schema
const schema = require('../itemschema')

const options = {
    timestamps: true
}

const itemSchema = new mongoose.Schema(schema.itemSchema, options)

module.exports = mongoose.model('Item', itemSchema)