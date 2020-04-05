
// Import our Controllers
const itemController = require('../controllers/itemcontroller');

// Get Data Models
const Item = require('../models/item/item')
const doc = require('../models/item/itemschema')

const routes = [
  {
    method: 'GET',
    url: '/api/items',
    handler: itemController.getItems
  },
  {
    method: 'GET',
    url: '/api/items/:id',
    handler: itemController.getSingleItem,
    schema: itemController.getSingleItemSchema
  },
  {
    method: 'POST',
    url: '/api/items',
    handler: itemController.addItem,
  },
  {
    method: 'PUT',
    url: '/api/items/:id',
    handler: itemController.updateItem
  },
  {
    method: 'DELETE',
    url: '/api/items/:id',
    handler: itemController.deleteItem
  }
]

module.exports = routes