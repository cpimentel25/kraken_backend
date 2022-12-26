"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./api/user"));
const value_1 = __importDefault(require("./api/value"));
const local_1 = __importDefault(require("./auth/local"));
const healthCheck_1 = __importDefault(require("./api/healthCheck"));
function routes(app) {
    app.use('/api/users', user_1.default);
    app.use('/api/values', value_1.default);
    app.use('/api/healthCheck', healthCheck_1.default);
    // AUTH route
    app.use('/auth/local', local_1.default);
}
;
exports.default = routes;
