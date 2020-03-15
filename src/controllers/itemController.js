// External Dependancies
const boom = require('@hapi/boom')

// Get Data Models
const Item = require('../models/Item')

// Get all cars
exports.getItems = async (req, reply) => {
  try {
    const items = await Item.find()
    return items
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = await Item.findById(id)
    return item
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addItem = async (req, reply) => {
  try {
    const item = new Item(req.body)
    return item.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = req.body
    const { ...updateData } = item
    const update = await Item.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = await Item.findByIdAndRemove(id)
    return item;
  } catch (err) {
    throw boom.boomify(err)
  }
}