import { DocumentDefinition } from "mongoose";
import Roster, { RosterDocument } from "./roster.model";

export function getAllRoster(id: string) {
  const filter = { 'createdBy': id };
  return Roster
    .find(filter, { values: 0 })
    .sort({ title: 1 })
    .populate({ path: 'createdBy', select: { firstName: 1, lastName: 1, email: 1 } });
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
    // .findOne(filter, { Guests: 0, _id: 0, title: 0, createdBy: 0, createdAt: 0, updatedAt: 0 })
    // .populate({ path: 'values', select: [{ value: 1 }] });
};
