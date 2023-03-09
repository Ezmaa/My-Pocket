
const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config()

const PORT = process.env.PORT

//  middlewares
app.use(express.json());
//  inside cors parameter you can put where you want your server to be accessed by ex: domain
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

const server = () => {
    app.listen(PORT, () => {
        console.log('PORT')
    })
}


server()