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
exports.handleLoginUser = void 0;
const user_services_1 = require("../../api/user/user.services");
const auth_service_1 = require("../auth.service");
/**
 * Returns a user profile and a JWT token signed by the app secret
 * @param req Request Request object
 * @param res Response Response object
 * @param next NextFunction Next function
 * @returns Promise<Response> Response object
 */
function handleLoginUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, user_services_1.getUser)({ email });
            // console.log(user);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const validPassword = yield user.comparePassword(password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid email or password ' });
            }
            const payload = user.profile;
            // JWT -> Token
            const token = (0, auth_service_1.singToken)(payload);
            return res.status(200).json({ profile: user.profile, token });
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.handleLoginUser = handleLoginUser;
;
