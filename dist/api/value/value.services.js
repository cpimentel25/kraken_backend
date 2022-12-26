"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteValue = exports.updateValue = exports.createValue = exports.getValueById = exports.getAllValue = void 0;
const value_model_1 = __importDefault(require("./value.model"));
function getAllValue() {
    return value_model_1.default.find().sort({ createdAt: -1 })
        .populate({ path: 'createdBy', select: 'firstName lastName' });
}
exports.getAllValue = getAllValue;
;
function getValueById(id) {
    const value = value_model_1.default.findById(id)
        .populate({ path: 'createdBy', select: 'firstName lastName' })
        .populate({ path: 'guest', select: 'firstName lastName' });
    // .populate('createdBy');
    return value;
}
exports.getValueById = getValueById;
;
function createValue(value) {
    return value_model_1.default.create(value);
}
exports.createValue = createValue;
;
function updateValue(id, value) {
    return value_model_1.default.findByIdAndUpdate(id, value, { new: true });
    // return updateValue;
}
exports.updateValue = updateValue;
;
function deleteValue(id) {
    const deleteValue = value_model_1.default.findByIdAndDelete(id);
    return deleteValue;
}
exports.deleteValue = deleteValue;
;
