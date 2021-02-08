const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to DB!")
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute); // everything in authRoute will have the prefix /api/user
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Server up and running"));