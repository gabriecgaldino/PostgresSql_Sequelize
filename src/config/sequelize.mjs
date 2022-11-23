import Sequelize from 'sequelize'
import { db_config } from './database.mjs'

const sequelize = new Sequelize(db_config)

export default sequelize

