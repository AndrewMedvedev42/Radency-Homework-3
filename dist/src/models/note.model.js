"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    text_content: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
    },
    category: {
        type: String,
        required: true
    },
    datesMentioned: [String],
    isArchived: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Note', noteSchema);
//# sourceMappingURL=note.model.js.map