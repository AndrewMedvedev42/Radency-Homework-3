const mongoose = require('mongoose');
import { Schema } from "mongoose";

const noteSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text_content:{
    type:String,
    required:true
  },
  createdAt:{
    type:String,
    default:`${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
  },
  category:{
    type:String,
    required:true
  },
  mentionedDates:[String],
  isArchived:{
    type:Boolean,
    default:false
  },
  isCompleted:{
    type:Boolean,
    default:false
  }

});

module.exports = mongoose.model('Note', noteSchema)
