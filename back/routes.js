const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
req.getConnection((err,con)=>{
    if (err) return res.send(err)

    con.query('SELECT * FROM albums',(err,rows)=>{
        if (err) return res.send(err)

        res.json(rows)
    })
}) 
})
module.exports = routes

routes.post('/',(req,res)=>{
    req.getConnection((err,con)=>{
        if (err) return res.send(err)
        
         
        con.query('INSERT INTO albums SET ?', [req.body] ,(err,rows)=>{
            if (err) return res.send(err)
    
            res.send(`The album has been added!`)
        }) 
    }) 
    })


    