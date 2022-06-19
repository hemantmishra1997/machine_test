import mongoose from "mongoose";
const url = "mongodb://localhost:27017/task"
mongoose.connect(url)
mongoose.connection
console.log("mongodb connect successfully");