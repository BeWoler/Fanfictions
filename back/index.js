require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("../back/router/route.js");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error-middleware.js");

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);

const connection = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(process.env.PORT, () => {
    console.log("running server");
  });
};

connection();
