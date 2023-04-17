const express = require('express')
const mysql = require('mysql2')
const MC = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 5000)
const optionsDb = {
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'Panconqueso@1',
    database:'albums',
    
}
//MIDDLEWARES

app.use(MC(mysql,optionsDb,'single'))
app.use(express.json())
app.use(cors())

app.get('/' , (req,res)=>{
    res.send('Welcome to the server')
})

app.use('/api',routes)

app.listen(app.get('port'), ()=>{
    console.log('Server running on port ' + app.get('port'))
})
