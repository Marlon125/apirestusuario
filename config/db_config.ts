import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

var HOST = process.env.HOST || '';
var DATABASE = process.env.DB || '';
var USER = process.env.USER || '';
var PASSWORD = process.env.PASS || '';

const db = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
});

export default db;