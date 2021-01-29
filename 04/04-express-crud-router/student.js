const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 1
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentSchema)
