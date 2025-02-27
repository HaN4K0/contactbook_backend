// app/config.js
module.exports = {
  app: {
    PORT: 3000, // Hoặc số port mà bạn muốn
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook",
  },
};
