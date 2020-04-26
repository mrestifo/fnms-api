
// Import our Controllers
const itemController = require('../controllers/itemcontroller');

// Get Data Models
const Item = require('../models/item/item')
const doc = require('../models/item/itemschema')

const routes = [
  {
    method: 'GET',
    url: '/v1/api/items',
    handler: itemController.getItems
  },
  {
    method: 'GET',
    url: '/v1/api/items/:id',
    handler: itemController.getSingleItem,
    schema: itemController.getSingleItemSchema
  },
  {
    method: 'POST',
    url: '/v1/api/items',
    handler: itemController.addItem,
  },
  {
    method: 'PUT',
    url: '/v1/api/items/:id',
    handler: itemController.updateItem
  },
  {
    method: 'DELETE',
    url: '/v1/api/items/:id',
    handler: itemController.deleteItem
  }
]

module.exports = routes