const mongoose = require('mongoose');


const NewTask = mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    title:String,
    describtion:String,
    iscompleted:Boolean,
});
module.exports = mongoose.model('AddNewTask',NewTask);