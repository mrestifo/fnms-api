// External Dependancies
const boom = require('@hapi/boom')

// Get Data Models
const Item = require('../models/item')

// Get all items
exports.getItems = async (req, reply) => {
  try {
    const items = await Item.find()
    return items
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single item by ID
exports.getSingleItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = await Item.findById(id)
    return item
  } catch (err) {
    throw boom.boomify(err)
  }
}

//Get single item by ID - schema
//Schema used for both validation and swagger.io doc

exports.getSingleItemSchema =
{
  description: 'Get item data by id',
  tags: ['Item'],
  summary: 'Retrieve all information for a specific item',
  params: {
    type: 'object',
    path: 'in',
    name: 'id',
    properties: {
      id: {
        type: 'string',
        description: 'item id'
      }
    }
  },
  response: {
    200: {
      description: 'Succesful response',
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: "Item 01"
        },
        age: {
          type: 'string',
          example: "21"
        },
        services: {
          type: 'object',
          additionalProperties: {
            type: 'string',
            properties: {
              id: {
                type: 'string'
              },
              key: {
                type: 'string'
              }
            }
          },
          example: {
            "Service1": "1/2/2020",
            "Service2": "3/2/2020",
            "AdditionalItem": "Any String"
          }
        }
      }
    }
  }
}

// Add a new item
exports.addItem = async (req, reply) => {
  try {
    const item = new Item(req.body)
    return item.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing item
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

// Delete an item
exports.deleteItem = async (req, reply) => {
  try {
    const id = req.params.id
    const item = await Item.findByIdAndRemove(id)
    return item;
  } catch (err) {
    throw boom.boomify(err)
  }
}