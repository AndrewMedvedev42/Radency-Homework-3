import { Document } from "mongoose";

export interface LooseObject {
    [key: string]: any
}

export interface INote extends Document {
    _id:object;
    name: string;
    text_content: string;
    createdAt:string;
    category:string,
    datesMentioned:string[],
    isArchived:boolean,
    isCompleted:boolean
}