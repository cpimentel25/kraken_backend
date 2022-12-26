import { DocumentDefinition } from "mongoose";
import Value, { ValueDocument } from "./value.model";


export function getAllValue() {
  return Value.find().sort({ createdAt: -1 })
    .populate({ path: 'createdBy', select: 'firstName lastName' });
};

export function getValueById(id: string) {
  const value = Value.findById(id)
    .populate({ path: 'createdBy', select: 'firstName lastName' })
    .populate({ path: 'guest', select: 'firstName lastName' });
  // .populate('createdBy');
  return value;
};

export function createValue(
  value: DocumentDefinition<Omit<ValueDocument, 'guest' | 'createdAt' | 'updateAt'>>
) {
  return Value.create(value);
};

export function updateValue(id: string, value: DocumentDefinition<ValueDocument>) {
  return Value.findByIdAndUpdate(id, value, { new: true });
  // return updateValue;
};

export function deleteValue(id: string) {
  const deleteValue = Value.findByIdAndDelete(id);
  return deleteValue;
};
