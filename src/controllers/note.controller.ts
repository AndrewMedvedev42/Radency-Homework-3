import { Response, Request} from "express";
import NoteService from "../services/note.service";



export class NoteController {
    constructor(private noteService: NoteService) {}
    async createNote(req: Request) {
        const {name, text_content, category} = req.body
        return await this.noteService.createNewNote(name, text_content, category);
    }

    async deleteNote(req: Request) {
        const {id} = req.params
        return await this.noteService.deleteNote(id);
    }

    async updateNote(req: Request) {
        const {id} = req.params
        const {name, text_content, category} = req.body
        return await this.noteService.updateNote(id, name, text_content, category);
    }

    async findOneNote(req: Request) {
        const {id} = req.params
        return await this.noteService.findOneNote(id);
    }

    async getAllNotes(){
        return await this.noteService.findAllNotes();
    }

    async getNotesStats(){
        return await this.noteService.getAllNotesStats();
    }
}

const noteController = new NoteController(new NoteService());
export default noteController;