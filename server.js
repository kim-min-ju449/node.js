const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;
db.on('error', function(err){
    console.log()
})
db.once('open', function(){
    console.log("디비연결")
})

const EmployeeRoute = require('./routes/employeeRoutes')

//morgan HTTP request 기록해주는 미들웨어
app.use(morgan('dev'))
// body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/employee', EmployeeRoute)

const PORT = process.env.PORT || 3333;
app.listen(PORT);