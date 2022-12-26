"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const ValueSchema = new mongoose_1.Schema({
    value: [{
            type: Number,
            required: true,
        }],
    currency: {
        type: String,
        enum: ['USD', 'COL'],
        default: 'USD',
    },
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
    categorie: {
        type: String,
        enum: [
            'Without category',
            'Other income',
            'Taxes',
            'Services',
            'Salary',
            'Rent',
            'Unexpected',
        ],
        default: 'Without category',
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    guest: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
    versionKey: false,
});
const Value = (0, mongoose_1.model)('Value', ValueSchema);
exports.default = Value;
