const { app } = require("./app");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("victvs server is up and running!");
});
