import { Schema, model } from "mongoose";

const Categories = new Schema({
  Services: {
    type: String,
    default: 'Service'
  },
  Taxes: {
    type: String,
    default: 'Taxes'
  }
}, { _id: false, versionKey: false });

// const values = new Schema({
//   value: [{
//     type: Number,
//     required: true,}],
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   categorie: [Categories],
// }, {
//   timestamps: true,
//   versionKey: false,
// });

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide a first name'],
  },
  lastname: {
    type: String,
    required: [true, 'Please provide a last name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  rol: {
    type: String,
    enum: ['USER', 'ADMIN', 'GUEST'],
    default: 'USER',
  },
  isActive: {
    type: Boolean,
    default: true, // <- Change to FALSE
  },
  categories: [Categories],
  // data: [values],
}, {
  timestamps: true,
  versionKey: false,
});


const User = model('User', UserSchema);

export default User;
