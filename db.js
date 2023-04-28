const { MongoClient } = require("mongodb");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB database
async function connect() {
  try {
    await client.connect();
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = { client, connect };
