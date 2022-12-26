"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.handleDeleteUsers = exports.handleUpdateUsers = exports.handleCreateUsers = exports.handleGetUsers = exports.handleAllGetUsers = void 0;
const user_services_1 = require("./user.services");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function handleAllGetUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_services_1.getAllUsers)();
            return res.status(200).json(users);
        }
        catch (error) {
            console.log('handleAllGetUsers ~ error', error);
            return res.status(500).json(error);
        }
    });
}
exports.handleAllGetUsers = handleAllGetUsers;
;
function handleGetUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield (0, user_services_1.getUserById)(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user.profile);
        }
        catch (error) {
            console.log('handleGetUser ~ error', error);
            return res.status(500).json(error);
        }
    });
}
exports.handleGetUsers = handleGetUsers;
;
function handleCreateUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield (0, user_services_1.createUser)(data);
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.handleCreateUsers = handleCreateUsers;
;
function handleUpdateUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.handleUpdateUsers = handleUpdateUsers;
;
function handleDeleteUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield (0, user_services_1.deleteUser)(id);
            return res.status(200).json({ message: 'User delete' });
        }
        catch (error) {
            console.log('handleDeleteUsers ~ error', error);
            return res.status(500).json(error);
        }
    });
}
exports.handleDeleteUsers = handleDeleteUsers;
;
