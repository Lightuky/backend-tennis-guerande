const dotenv = require("dotenv");
//const path = require("path");

dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  DBURL: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@bdd.f88n9.mongodb.net/siteWeb?retryWrites=true&w=majority`,
  IMAGE: `${__dirname}/src/image/`,
};

module.exports = config;
