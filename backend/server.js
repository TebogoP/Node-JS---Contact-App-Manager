const express = require("express");
const app = express();

//Helps with getting things from .env files
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//All routes will use "/api/contacts" as basePath for all routes in the contactRoutes file
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});