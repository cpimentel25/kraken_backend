import { DocumentDefinition } from "mongoose";
import Value, { ValueDocument } from "./value.model";
import Roster from "../roster/roster.model";

export function getAllValue(id: string) {
  const filter = { 'createdBy': id }; // -> Filter {Working!}
  return Value.find(filter).sort({ createdAt: -1 })
    .populate({ path: 'createdBy', select: 'firstName lastName' });
};

export function getValueById(id: string) {
  const value = Value.findById(id)
    .populate({ path: 'createdBy', select: 'firstName lastName' })
    .populate({ path: 'guest', select: 'firstName lastName' });
  return value;
};

export function createValue(
  value: DocumentDefinition<Omit<ValueDocument, 'guest' | 'createdAt' | 'updateAt'>>
) {
  return Value.create(value);
};

export function updateRosterValue(
  data: DocumentDefinition<Omit<ValueDocument, 'guest' | 'createdAt' | 'updateAt'>>,
  user: any
) {
  const query = {
    _id: data.roster,
    createdBy: user._id
  }

  const update = {
    $push: { values: data }
  }

  return Roster.findOneAndUpdate(query, update);
};

export function updateValue(id: string, value: DocumentDefinition<ValueDocument>) {
  return Value.findByIdAndUpdate(id, value, { new: true });
};

export function deleteValue(id: string) {
  const deleteValue = Value.findByIdAndDelete(id);
  return deleteValue;
};
