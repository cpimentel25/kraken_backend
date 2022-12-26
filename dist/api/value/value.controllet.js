"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteValue = exports.handleUpdateValue = exports.handleCreateValue = exports.handleGetValue = exports.handleAllGetData = void 0;
const value_services_1 = require("./value.services");
function handleAllGetData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const value = yield (0, value_services_1.getAllValue)();
            return res.status(200).json(value);
        }
        catch (error) {
            console.log('handleAllGetData ~ error', error);
            return res.status(500).json(error);
        }
    });
}
exports.handleAllGetData = handleAllGetData;
;
function handleGetValue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const value = yield (0, value_services_1.getValueById)(id);
            return res.status(200).json(value);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.handleGetValue = handleGetValue;
;
function handleCreateValue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const value = yield (0, value_services_1.createValue)(data);
            return res.status(200).json(value);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.handleCreateValue = handleCreateValue;
;
function handleUpdateValue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        try {
            const value = yield (0, value_services_1.updateValue)(id, data);
            if (!value) {
                return res.status(404).json({ message: 'Value no found' });
            }
            return res.status(200).json(value);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.handleUpdateValue = handleUpdateValue;
;
function handleDeleteValue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        console.log(req.user);
        try {
            const value = yield (0, value_services_1.deleteValue)(id);
            if (!value) {
                return res.status(404).json({ message: 'Value not found' });
            }
            return res.status(200).json({ message: 'Value delete ' });
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.handleDeleteValue = handleDeleteValue;
;
