const express = require('express')
require ('dotenv').config()
const app = express()
const mysql = require('mysql2')
app.use(express.json())

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env

app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD
    })
    const crm = req.body.crm
    const nome = req.body.nome
    connection.query("insert into tb_medico (crm, nome) values " 
    + crm + ",'" + nome + "')", 
    (err, results, fields) => {
        console.log(results)
        console.log(fields)
        res.send('Ok')

    })
    console.log

    connection.query('select * from tb_medico', (err, results, fields) => {
        res.send (results)
        //req.send (fields)
        //res.send('ok')
    })
})
app.get("/pacientes", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        database: 'bd_hospital',
        passworld: '1111'
    })
    connection.query('select * from tb_paciente' , (err, results, fields) => {

    })
})
const porta = 3000
app.listen(porta, () => console.log(`servidor escutando a porta ${porta}`))

