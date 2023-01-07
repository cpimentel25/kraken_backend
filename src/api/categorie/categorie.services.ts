import { DocumentDefinition, FilterQuery } from "mongoose";
import Categorie, { CategorieDocument } from "./categorie.model";

export function getAllCategorie(id: string) {
  const filter = {'createdBy': id};
  return Categorie.find(filter).sort({ name: 1 });
};

export function getCategorieById(id: string) {
  const categorie = Categorie.findById(id);
  return categorie;
};

export function getCategorie(filter: FilterQuery<CategorieDocument>) {
  const categorie = Categorie.findOne(filter);
  return categorie;
};

export function createCategorie(
  input: DocumentDefinition<Omit<CategorieDocument, 'createdAt' | 'updateAt'>>
) {
  return Categorie.create(input);
};

export function updateCategorie(
  id: string,
  categorie: DocumentDefinition<Omit<CategorieDocument, 'createdAt' | 'updateAt'>>
) {
  const updateCategorie = Categorie.findByIdAndUpdate(id, categorie, { new: true });
  return updateCategorie;
};

export function deleteCategorie(id: string) {
  const deleteCategorie = Categorie.findByIdAndDelete(id);
  return deleteCategorie;
};
