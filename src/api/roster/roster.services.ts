import { DocumentDefinition } from "mongoose";
import Roster, { RosterDocument } from "./roster.model";

export function getAllRoster(id: string) {
  const filter = { 'createdBy': id };
  return Roster.find(filter, { values: 0, createdBy: { password: 0 } }).sort({ title: 1 }).populate({ path: 'createdBy' });
};

export function postCreateRoster(
  input: DocumentDefinition<Omit<RosterDocument, 'createdAt' | 'updateAt'>>
) {
  return Roster.create(input);
};
