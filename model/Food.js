const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const Foodschema = new Schema({
        Name: {
          type: String,
          required: true,
        },
        Catergory: {
          type: String,
          required: true
        },
        Description: {
          type: String,
          required: true
        },
        Price: {
          type: String,
          required: true
        },
        Rating: {
            type: String,
            required: true
          },
          Image: {
            type: String,
            required: true
          },
      }, { timestamps: true });

const Food = mongoose.model('Food',Foodschema);

module.exports = Food;