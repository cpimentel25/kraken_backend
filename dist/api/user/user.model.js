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
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
;
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a first name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a last name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'GUEST'],
        default: 'USER',
    },
    isActive: {
        type: Boolean,
        default: true, // <- Change to FALSE
    },
}, {
    timestamps: true,
    versionKey: false,
});
function save(next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        try {
            if (!user.isModified('password')) {
                return next();
            }
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hash = yield bcryptjs_1.default.hash(user.password, salt);
            user.password = hash;
        }
        catch (error) {
            next(error);
        }
    });
}
;
// Middlewares
UserSchema.pre('save', save);
UserSchema.pre('update', save);
// Virtuals
UserSchema.virtual('fullName').get(function fullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
});
UserSchema.virtual('profile').get(function profile() {
    const { firstName, lastName, email, role } = this;
    return {
        firstName,
        lastName,
        email,
        role
    };
});
// Methods
function comparePassword(candidatePassword, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        try {
            const isMatch = yield bcryptjs_1.default.compare(candidatePassword, user.password);
            return isMatch;
        }
        catch (error) {
            next(error);
            return false;
        }
    });
}
;
UserSchema.methods.comparePassword = comparePassword;
const User = (0, mongoose_1.model)('User', UserSchema);
exports.default = User;
// 1. Encript PASSWORD
// 2. Middleware mongoose -> .pre('save');
// 3. Compared PASSWORD witch HASH saved
// 4. Method mongoose -> comparePassword
