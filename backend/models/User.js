const mongoose = require("mongoose");
const {Schema}=mongoose;
const UserSchema =new Schema({
    name: {
      type: String,
      required: true,
      minlength:5,
    },
    location:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true,"Email already exist"],
    //   validate(value){
    //     if(!validator.isEmail(value)){
    //       console.log("yes");
    //       throw new error("Invalid email")
    //     }
    //  }
    },
    password: {
      type: String,
      required: true,
      minlength:5,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  });
  module.exports = mongoose.model("user", UserSchema);
  