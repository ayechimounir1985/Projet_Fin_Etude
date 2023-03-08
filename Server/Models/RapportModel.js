

const RapportSchema = new mongoose.schema({
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
    FPM:{
        type:[{DPiece:String,
               Quantity: Number
        
        }]
    },
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
    }

})