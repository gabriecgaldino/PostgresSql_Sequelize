import express from 'express'
import sequelize from './config/sequelize.mjs'
import db from './models/index.mjs'


const app = express()

app.use(express.json())


sequelize.sync()
    .then(()=> {
        console.log('Connected to Database!')
    })

async ()=> {
    await db.test.create({ username: 'exempleUser', email: 'exemple@mail.com'})
}

app.listen(3333, console.log('App on service...'))