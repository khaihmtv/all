const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb");
const userSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const user = mongoose.model("user", userSchema);

user.find().exec((err,result) => {
    console.log(result);
});