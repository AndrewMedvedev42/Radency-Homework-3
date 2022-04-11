import { Response, Request, NextFunction} from "express";
import { INote } from "../types/notes.type";

function validateDto(schema:INote) {
  return async (req:Request, _res:Response, next:NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      next("Body value is not valid");
    }
  };
}

module.exports = validateDto;