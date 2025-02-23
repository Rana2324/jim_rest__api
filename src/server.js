import express from "express";
import router from "./routes/index.js";

//call the express
const app = express();

//middlewares
app.use(express.json());

//routes

app.use("/api/v1/", router);

//listen
app.listen(3000, (req, res) => {
  console.log("Server is running at port 3000 http://localhost:3000");
});
