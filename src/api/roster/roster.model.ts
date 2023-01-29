import { Document, ObjectId, Schema, model } from "mongoose";

export interface RosterDocument extends Document {
  title: string;
  createdBy: ObjectId;
  values: string;

  createdAt: Date;
  updateAt?: Date;
};

const RosterSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  values: {
    type: Array,
  },
}, {
  timestamps: true,
  versionKey: false,
});

// Virtuals
RosterSchema.virtual('Roster').get(function roster(this: RosterDocument) {
  const { title } = this;
  return {
    title,
  }
});

const Roster = model<RosterDocument>('Roster', RosterSchema);

export default Roster;
