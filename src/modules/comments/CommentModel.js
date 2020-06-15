import { Schema, model } from 'mongoose'

const comment = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default model('Comment', comment);
