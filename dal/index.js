const { MongoClient } = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017")

client.connect(err => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log("Connected to MongoDB server");
})

module.exports = client
