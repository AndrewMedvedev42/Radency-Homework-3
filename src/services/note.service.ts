import { INote } from "../types/notes.type";
const NoteModel = require("../models/note.model")
import { getMentionedDates } from "../modules";
import { LooseObject } from "../types/notes.type";

export default class NoteService {
    async createNewNote(name:string, text_content:string, category:string) {
        let mentionedDates = getMentionedDates(text_content)
        return await NoteModel.create({name, text_content, mentionedDates, category})
    }
    async deleteNote(note_id:string) {
        return await NoteModel.findOneAndDelete({_id:note_id})
    }

    async updateNote(note_id:string, name:string, text_content:string, category:string, isCompleted:boolean) {
        let mentionedDates = getMentionedDates(text_content)
        return await NoteModel.findOneAndUpdate({_id:note_id},{name, text_content, mentionedDates, category, isCompleted},{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
    }

    async updateNoteArchiveStatus(note_id:string) {
        return await NoteModel.findById(note_id,(err:any, note:INote)=>{
            if (note) {
                note.isArchived = !note.isArchived
                note.save()
            }
        })
    }

    async findOneNote(note_id:string) {    
        return await NoteModel.findOne({_id:note_id})
    }

    async findAllNotes() {
        return await NoteModel.find({})
    }

    async getAllNotesStats() {
        let  notes_list = await NoteModel.find({})
        const noteStats:LooseObject = []

        notes_list.map((item:INote) => item.category)
            .filter((value:string, index:number, self:string[]) => self.indexOf(value) === index)
                .forEach((category:string)=>{
                    let activeNotesCount = 0
                    let archivedNotesCount = 0
                    notes_list.filter((item:INote)=>category === item.category)
                    .forEach((item:INote)=>{
                        !item.isCompleted && activeNotesCount++
                        item.isArchived && archivedNotesCount++
                    })
                    noteStats.push({
                        category:category,
                        activeNotesCount:activeNotesCount,
                        archivedNotesCount:archivedNotesCount
                    })
            })

        return noteStats
        
    }
}