import mongoose, { Schema, model, Document, DocumentDefinition, ObjectId } from "mongoose";
import bcrypt from "bcryptjs";

export interface CategorieDocument extends Document {
  name: string;
  createdBy: ObjectId;
  createdAt: Date;
  updateAt?: Date;
};

const CategorieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Categorie = model<CategorieDocument>('Categorie', CategorieSchema);

export default Categorie;
