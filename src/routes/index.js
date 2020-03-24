
// Import our Controllers
const itemController = require('../controllers/itemController');

// Get Data Models
const Item = require('../models/Item')
const doc = require('../models/itemschema')

const routes = [
  {
    method: 'GET',
    url: '/api/items',
    handler: itemController.getItems
  },
  {
    method: 'GET',
    url: '/api/items/:id',
    handler: itemController.getSingleItem
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