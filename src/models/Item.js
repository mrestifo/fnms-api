// External Dependancies
const mongoose = require('mongoose')

const schema = require('./schema')

const options = {
    timestamps: true
}

const itemSchema = new mongoose.Schema(schema.itemSchema, options)

module.exports = mongoose.model('Item', itemSchema)