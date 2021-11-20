const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// Routers

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Connected to server")
);

// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan());

// app.get("/", (req, res) => {
//   res.send("Welcome to the homepage");
// });

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => console.log("Backend is running"));
