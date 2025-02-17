const mongoose = require("mongoose");



const itemDetailsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    }
})

const restaurentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items: [Number],

    itemDetails: itemDetailsSchema
        
    }
)


module.exports = mongoose.model("restaurent",restaurentSchema);