
//Define SubItem as needed
const subitemSchema = {
  price: Number
}

//Define Item schema as needed
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