import { Router } from "express";
const validateDto = require("../../middleware/reqBodyValidate") ;
import { bodyValidation } from "../../models/noteValidationSchema";
import noteController from "../../controllers/note.controller";
import errorReceiver from "../../middleware/errorReceiver";

const noteRouter: Router = Router();

noteRouter.post(
    "/", 
    validateDto(bodyValidation),
    errorReceiver(noteController.createNote.bind(noteController)));
    
noteRouter.get("/stats", errorReceiver(noteController.getNotesStats.bind(noteController)));

noteRouter.patch(
    "/:id", 
    validateDto(bodyValidation),
    errorReceiver(noteController.updateNote.bind(noteController)));

noteRouter.delete("/:id", errorReceiver(noteController.deleteNote.bind(noteController)));
noteRouter.get("/:id", errorReceiver(noteController.findOneNote.bind(noteController)));

noteRouter.patch(
    "/archive/:id", 
    errorReceiver(noteController.updateNoteArchiveStatus.bind(noteController)));

noteRouter.get("/", errorReceiver(noteController.getAllNotes.bind(noteController)));

export default noteRouter;
