// server/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from the Express Server!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
