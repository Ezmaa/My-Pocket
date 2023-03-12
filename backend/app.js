const express = require('express');
const cors = require('cors');
const { db } = require('./db/db')
const { readdirSync } = require('fs')
const app = express();
require('dotenv').config()

const PORT = process.env.PORT

//  middlewares
app.use(express.json());
//  inside cors parameter you can put where you want your server to be accessed by ex: domain
app.use(cors())

// readdirsync reads whatever files are in the folder 
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get('/', (req, res) => {
    res.send('hello')
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(PORT)
    })
}


server()