"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("../config/database"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const router = new routes_1.default(app);
// Connect to MongoDB
database_1.default();
// Express configuration
app.set("port", process.env.PORT || 8000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
router.init();
const port = app.get("port");
const server = app.listen(port, () => 
// tslint:disable-next-line:no-console
console.log(`Server started on port ${port}`));
exports.default = server;
//# sourceMappingURL=server.js.map