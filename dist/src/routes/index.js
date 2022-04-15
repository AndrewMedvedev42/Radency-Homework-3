"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_route_1 = __importDefault(require("./api/notes.route"));
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.use("/api/notes", notes_route_1.default);
    }
}
exports.default = AppRouter;
//# sourceMappingURL=index.js.map