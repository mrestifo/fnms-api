
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
    handler: itemController.getSingleItem,
    schema:{
      description: 'Get item data by id',
      tags: ['Item'],
      summary: 'qwerty',
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'user id'
          }
        }
      },
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      },
      response: {
        201: {
          description: 'Succesful response',
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    
    }
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