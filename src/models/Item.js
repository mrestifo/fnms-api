// External Dependancies
const mongoose = require('mongoose')

const schema = require('./itemschema')

const options = {
    timestamps: true
}

const itemSchema = new mongoose.Schema(schema.itemSchema, options)

module.exports = mongoose.model('Item', itemSchema)