const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/students-api";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection");
  })
  .catch((err) => {
    console.log(err);
  });

// var MongoClient = require('mongodb').MongoClient;
// var dburl       =   "mongodb://localhost:27017/test";
// const uri = "mongodb://localhost:27017/";
// const client = new MongoClient(uri);
// MongoClient.connect(dburl, function(err, db) {
//   if (err) {
//     throw err;
//   }
//   console.log('db connected');
//   db.close();
// });
