const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  // DBURL: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@bdd.f88n9.mongodb.net/siteWeb?retryWrites=true&w=majority`,
  DBURL: "mongodb://127.0.0.1:27017/backend-guerande",
  IMAGE: `${__dirname}/public/image/`,
};

module.exports = config;
