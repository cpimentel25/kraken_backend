import { Schema, model } from "mongoose";

export interface ValueDocument extends Document {
  value: number;
  currency: string;
  categorie: string;
  createdBy: string;
  createdAt: Date;
  updateAt: Date;
  guest: string;
};

const ValueSchema = new Schema({
  value: [{
    type: Number,
    required: true,
  }],
  currency: {
    type: String,
    enum: ['USD', 'COL'],
    default: 'USD',
  },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  categorie: {
    type: String,
    enum: [
      'Without category',
      'Other income',
      'Taxes',
      'Services',
      'Salary',
      'Rent',
      'Unexpected',
    ],
    default: 'Without category',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Value = model('Value', ValueSchema);

export default Value;
