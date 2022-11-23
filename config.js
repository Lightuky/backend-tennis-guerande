import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export const config = {
  PORT: process.env.PORT || 8080,
  DBURL: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@bdd.f88n9.mongodb.net/siteWeb?retryWrites=true&w=majority`,
  IMAGE: `${__dirname}/public/image/`,
};
