
// Import our Controllers
const itemController = require('../controllers/itemcontroller');

// Get Data Models
const Item = require('../models/item/item')
const doc = require('../models/item/itemschema')

const routes = [
  {
    method: 'GET',
    url: '/api/v1/items',
    handler: itemController.getItems
  },
  {
    method: 'GET',
    url: '/api/v1/items/:id',
    handler: itemController.getSingleItem,
    schema: itemController.getSingleItemSchema
  },
  {
    method: 'POST',
    url: '/api/v1/items',
    handler: itemController.addItem,
  },
  {
    method: 'PUT',
    url: '/api/v1/items/:id',
    handler: itemController.updateItem
  },
  {
    method: 'DELETE',
    url: '/api/v1/items/:id',
    handler: itemController.deleteItem
  }
]

module.exports = routes