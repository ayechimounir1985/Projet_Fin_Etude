const mongoose = require('mongoose')

const RapportSchema = new mongoose.Schema({
    Frame:{
    type:String,
    required:true,
    },
    Type:{
        type:String,
        required:true,
    },
    Client:{
        type:String,
        required:true,
    },
    Adress: String,
    FPM:String,
    DateandHourDepart:{
         type:String,
         required:true,
    },
    DateandHourFeedback:{
        type:String,
        required:true,
    },
    TechnicalReport:{
        type:String,
        required:true,
    },
    RemainstobeDone:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'non-validated'
    }
  

})
module.exports = mongoose.model ('rapport',RapportSchema)