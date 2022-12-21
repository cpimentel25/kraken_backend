import { Schema, model } from "mongoose";

const ValueSchema = new Schema({
  value: [{
    type: Number,
    required: true,
  }],
  date: {
    type: Date,
    default: Date.now
  },
  categorie: {
    type: String,
    enum: [
      'Without category',
      'Other income',
      'Taxes',
      'Services',
      'Salary',
      'Rent',
      'Unexpected'
    ],
    default: 'Without category'
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Value = model('Value', ValueSchema);

export default Value;
