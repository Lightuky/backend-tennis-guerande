import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  DBURL: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@bdd.f88n9.mongodb.net/siteWeb?retryWrites=true&w=majority`,
  IMAGE: `${__dirname}/public/image/`,
};

module.exports = config;
