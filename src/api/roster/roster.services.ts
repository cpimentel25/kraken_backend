import mongoose, { DocumentDefinition } from "mongoose";
import Roster, { RosterDocument } from "./roster.model";

export function getAllRoster(id: string) {
  const filter = { 'createdBy': id };
  return Roster
    .find(filter)
    .sort({ title: 1 })
    .populate({ path: 'createdBy', select: { firstName: 1, lastName: 1, email: 1 } });
};

export function updateRoster(
  id: string,
  roster: DocumentDefinition<Omit<RosterDocument, 'createdAt' | 'updateAt'>>
  ) {
  const updateRoster = Roster.findByIdAndUpdate(id, roster, { new: true });
  return updateRoster;
};

export function deleteRoster(id: string) {
  return Roster.findByIdAndDelete(id);
}

export function getAllSharedRoster(id: string) {
  // const filter = { 'guests': { 'email': 'jg_test@kraken.com' }};
  // const filter = { "guests": { "_id": id, "firstName": "Juan", "lastName": "Gomez","email": "jg_test@kraken.com" }}};
  const filter = { 'guests': { '_id': id }};

  return Roster
    .find(filter);
};

export function postCreateRoster(
  input: DocumentDefinition<Omit<RosterDocument, 'createdAt' | 'updateAt'>>
) {
  return Roster.create(input);
};

export function getAllValuesRoster(id: string) {
  const filter = { 'createdBy': id };
  return Roster.find(filter).sort({ title: 1 }).select({ values: 1 });
};

export function getValueRoster(userId: string, id: string) {
  const filter = {
    '_id': id,
    'createdBy': userId
  }
  return Roster
  .findOne(filter)
  .select({ values: 1, _id: 0 });
};

export function getRosterTotalValues(userId: string, id: string) {
  const filter = {
    _id: new mongoose.Types.ObjectId(id),
    createdBy: userId
  }
  const result = Roster
    .aggregate([
      { $match: filter },
      { $unwind: "$values" },
      { $group: { _id: "$values.roster" , total: { $sum: "$values.value" }}}
    ]);

    // -> aggregate mode2 ->
    // .aggregate()
    // .match(filter)
    // .unwind({ path: '$values', preserveNullAndEmptyArrays: true })
    // .group({ _id: '$roster', total: { $sum: '$values.value' }});

  return result;
};

export function getLastValueRoster(userId: string, id: string) {
  const filter = {
    '_id': id,
    'createdBy': userId
  }
  return Roster
    .findOne(filter)
    .select({ values: 1, Guests: 0, _id: 0, createdAt: 0, updatedAt: 0, title: 0, createdBy: 0 })
    .slice('values', -1);
};

export function getLastFiveRoster(userId: string, id: string) {
  const filter = {
    '_id': id,
    'createdBy': userId
  };

  return Roster
    .findOne(filter)
    .select({ values: 1 })
    .slice('values', -5)
    .sort({ value: 1 })
};

// GraphQl ->
export function getRosters() {
  return Roster.find();
};
