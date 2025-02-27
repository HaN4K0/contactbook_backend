const { MongoClient } = require("mongodb");
const ContactService = require("./app/services/contact.service");
const ApiError = require("./app/api-error");

const express = require("express");
const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

//handle 404 response
app.use((err, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
// Code ở đây sẽ chạy khi không tìm thấy route nào,
// Gọi next để chuyển sang middleware xử lý lỗi

module.exports = app;
