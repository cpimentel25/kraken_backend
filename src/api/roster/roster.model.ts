import { Document, ObjectId, Schema, model } from "mongoose";

export interface RosterDocument extends Document {
  title: string;
  createdBy: ObjectId;
  values: string;
  Guests: string[];

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
    type: Schema.Types.Array,
    ref: 'Value'
  },
  Guests: [{
    type: String
  }],
}, {
  timestamps: true,
  versionKey: false,
});

// Virtuals
RosterSchema.virtual('Roster').get(function roster(this: RosterDocument) {
  const { id, title, createdBy, createdAt, updateAt } = this;
  return {
    id,
    title,
    createdBy,
    createdAt,
    updateAt,
  }
});

const Roster = model<RosterDocument>('Roster', RosterSchema);

export default Roster;
