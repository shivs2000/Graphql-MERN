const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bookSchema=new Schema({
name:String,
authorId:String,
genre:String,
});
module.exports=mongoose.model('Book',bookSchema);