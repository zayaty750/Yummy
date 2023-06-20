const mongoose = require("mongoose");

const Foodschema = new mongoose.Schema({
    Name:{
        Type:String,
        require:true,
    },
    Catergory:{
        Type:String,
        require:true,
    },
    Description:{
        Type:String,
        require:true,
    },
    Price:{
        Type:Number,
        require:true,
    },
    Rating:{
        Type:String,
        require:true,
    },

},{timestamps: true});


const Food = mongoose.model("Food",Foodschema);

module.exports = Food;