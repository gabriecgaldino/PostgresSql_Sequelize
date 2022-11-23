import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.mjs";
import Test from "./test_db.mjs";


const test = Test(sequelize, DataTypes)


const db = {
    test,
    sequelize,
}


export default db