import { Application } from "express";
import notesRouter from "./api/notes.route";
class AppRouter {
    constructor(private app: Application) {}
    init() {
        this.app.use("/api/notes", notesRouter);
    }
}

export default AppRouter;