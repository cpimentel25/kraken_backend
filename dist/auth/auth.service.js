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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.isAuthenticated = exports.verifyToken = exports.singToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_services_1 = require("../api/user/user.services");
const SECRET = process.env.TOKEN_SECRET;
// singToken ->
/**
 * Returns a JWT signed by the app secret
 * @param payload Object / String Data to be signed
 * @param options Object
 * @returns token String
 */
function singToken(payload, options) {
    const token = jsonwebtoken_1.default.sign(payload, SECRET, options);
    return token;
}
exports.singToken = singToken;
;
// verifyToken ->
/**
 * Validates a JWT
 * @param token String JWT token
 * @returns Object / Boolean
 */
function verifyToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        return decoded;
    }
    catch (error) {
        return false;
    }
    ;
}
exports.verifyToken = verifyToken;
;
// isAuthenticated ->
function isAuthenticated(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        ;
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        ;
        const user = yield (0, user_services_1.getUser)({ email: decoded.email });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        ;
        req.user = user;
        next();
        return true;
    });
}
exports.isAuthenticated = isAuthenticated;
;
// hasRol -> CLOSURES
function hasRole(allowRoles) {
    return (req, res, next) => {
        const { role } = req.user;
        if (!allowRoles.includes(role)) {
            return res.status(404).json({ message: 'Forbidden' });
        }
        ;
        next();
        return true;
    };
}
exports.hasRole = hasRole;
;
