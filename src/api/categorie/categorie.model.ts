import mongoose, { Schema, model, Document, ObjectId } from "mongoose";

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

// Virtuals
CategorieSchema.virtual('categories').get(function categories(this: CategorieDocument) {
  const { name } = this;
  return {
    name
  };
});

const Categorie = model<CategorieDocument>('Categorie', CategorieSchema);

export default Categorie;
