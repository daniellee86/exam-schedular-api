const { app } = require("./app");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("victvs server is up and running!");
});
