import express from "express";
import dotenv from "dotenv";
import router from "./routers/Routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} running on port ${process.env.PORT}`);
});
