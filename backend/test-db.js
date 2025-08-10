require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Connection error:", err);
    process.exit(1);
  });
