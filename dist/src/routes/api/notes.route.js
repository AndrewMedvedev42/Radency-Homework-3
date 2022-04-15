"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateDto = require("../../middleware/reqBodyValidate");
const noteValidationSchema_1 = require("../../models/noteValidationSchema");
const note_controller_1 = __importDefault(require("../../controllers/note.controller"));
const errorReceiver_1 = __importDefault(require("../../middleware/errorReceiver"));
const noteRouter = express_1.Router();
noteRouter.get("/:noteId", errorReceiver_1.default(note_controller_1.default.getAllNotes.bind(note_controller_1.default)));
noteRouter.post("/:noteId", validateDto(noteValidationSchema_1.bodyValidation), errorReceiver_1.default(note_controller_1.default.createNote.bind(note_controller_1.default)));
exports.default = noteRouter;
//# sourceMappingURL=notes.route.js.map