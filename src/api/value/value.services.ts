import { DocumentDefinition } from "mongoose";
import Value, { ValueDocument } from "./value.model";
import Roster from "../roster/roster.model";
import { type } from "os";

export function getAllValue(id: string) {
  const filter = { 'createdBy': id }; // -> Filter {Working!}
  return Value.find(filter).sort({ createdAt: -1 });
  // .populate({ path: 'createdBy', select: 'firstName lastName' });
};

export function getValueById(id: string) {
  const value = Value.findById(id)
    .populate({ path: 'createdBy', select: 'firstName lastName' })
    .populate({ path: 'guest', select: 'firstName lastName' });
  return value;
};

export function findRoster(
  data: DocumentDefinition<ValueDocument>,
  user: any
) {
  const query = {
    _id: data.roster,
    createdBy: user._id
  }

  return Roster.findOne(query);
};

export function createValue(
  value: DocumentDefinition<Omit<ValueDocument, 'guest' | 'createdAt' | 'updateAt'>>
) {
  return Value.create(value);
};

export function updateRosterValue(
  data: DocumentDefinition<ValueDocument>,
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

// GraphQl
type Pagination = {
  offset: number
  limit: number
};

type Range = {
  min: number
  max: number
};

type RangeDate = {
  before: number
  after: number
};

export function getAllValueById(rosterId: string, pagination: Pagination, categorie: string, rangeValue: Range, createdBy:string, createdAt: number) {
  const filter = {
    'roster': rosterId,
    'categorie': categorie,
    'value': { $gte: rangeValue.min, $lte: rangeValue.max },
    'createdBy': createdBy,
    'createdAt': { $lt: createdAt }
    // 'createdAt': { $gte: createdAt.before, $lte: createdAt.after }
  };
  return Value
    .find(filter)
    .skip(pagination.offset)
    .limit(pagination.limit)
    .sort({ createdAt: -1 });
};

export function getValuesById(rosterId: string) {
  const filter = {
    'roster': rosterId,
    // 'categorie': categorie,
    // 'value': { $gte: rangeValue.min, $lte: rangeValue.max },
    // 'createdBy': createdBy,
    // 'createdAt': { $lt: createdAt }
  };
  return Value
    .find(filter)
    .sort({ createdAt: -1 });
};

export function getValuesForCharts(rosterId: string, categorie: string, createdBy: string, createdAt: number) {
  const filter = {
    'roster': rosterId,
    'categorie': categorie,
    'createdBy': createdBy,
    'createdAt': { $lt: createdAt }
  };
  return Value
    .find(filter)
    .sort({ createdAt: -1 });
};

export function getAllValuesDiferents(rosterId: string) {
  const filter = {
    'roster': { $ne: rosterId }, //diferentes al id
  };
  return Value.find(filter).sort({ createdAt: -1 });
};
