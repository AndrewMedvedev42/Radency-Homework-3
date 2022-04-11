import bodyParser from "body-parser";
import express from "express";

import connectDB from "./config/database";
import AppRouter from "./src/routes";

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

const port = app.get("port");
const server = app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${port}`)
);

export default server;
