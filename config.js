const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  DBURL:
    "mongodb+srv://" +
    process.env.DBUSER +
    ":" +
    process.env.DBPASSWORD +
    "@bdd.f88n9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};

module.exports = config;
