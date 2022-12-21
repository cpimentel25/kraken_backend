import Value from "./value.model";


export function getAllValue() {
  return Value.find({}, { _id: 0 }).sort({ createdAt: -1 });
};

export function getValueById(id) {
  const value = Value.findById(id);
  return value;
};

export function createValue(value) {
  return Value.create(value);
};

export function updateValue(id) {
  const updateValue = Value.findByIdAndUpdate(id);
  return updateValue;
};

export function daleteValue(id) {
  const deleteValue = Value.findByIdAndDelete(id);
  return deleteValue;
};
