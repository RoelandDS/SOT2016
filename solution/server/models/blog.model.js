'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blog = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId()
  },
  title: {
    type: String,
    required: true,
    index: true
  },
  body: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  comments: [{
    name:{type: String},
    comment: {type: String},
    commentDate: {type: Date, default: new Date()}
  }],
  uploadDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Blog', blog);