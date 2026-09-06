const express = require("express");
const app = express();

//Helps with getting things from .env files
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//Gets all contacts
app.get("/api/contacts", (req, res) => {
    res.status(200).json({"message":"Get all Contacts "});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});