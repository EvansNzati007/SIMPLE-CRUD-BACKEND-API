const { type } = require('jquery')
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, 'le nom est obligatoire']
    },

    quantite: {
      type: Number,
      required: [true, 'la quantité est obligatoire']
    },

    prix: {
      type: Number,
      required: true,
      default: 0
    },

    image: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;
