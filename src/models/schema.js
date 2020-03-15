const subitemSchema = {
  price: Number
}

const itemSchema = {
    title: String,
    age: Number,
    services: {
      type: Map,
      of: String
    },
    detail: subitemSchema
  };

module.exports.subitemSchema = subitemSchema
module.exports.itemSchema = itemSchema