const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
