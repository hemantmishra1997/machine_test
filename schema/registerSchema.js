import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const registerSchema  = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"name is required"],
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
    },
    mobile:{
        type:String,
        required:[true,"mobile is required"],
        maxlength:10,
        minlength:10,
        trim:true,
    },
    notes:{
        type:String,
        required:[true,"notes is required"],
        lowercase:true,
        trim:true,
    },
    apartment:{
        type:String,
        required:[true,"Apartment is required"],
        trim:true,
    },
    address:{
        type:String,
        required:[true,"address is required"],
        trim:true,
        lowercase:true,
    },
    pin:{
        type:Number,
        required:[true,"pin code is required"],
        trim:true,
        maxlength:6,
        miinlength:6,
    },
    card:{
        type:String,
        required:[true,"card detail is required"],
        trim:true,
        lowercase:true,
    },
    token :{
        type:String,
        required:[true,"token id is required"],
        trim:true,
    },
    four_digit:{
        type:String,
        required:[true,"last four digit  is required"],
        trim:true,
        maxlength:6,
        minlength:6,
    },
})

registerSchema.plugin(mongooseUniqueValidator)
const registerSchemaModel = mongoose.model("data",registerSchema,"data")
export default registerSchemaModel