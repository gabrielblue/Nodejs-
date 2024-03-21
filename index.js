const express = require('express');
const app = express();
const Studentroute = require('./Routes/studentRoute');
const courseRoute = require('./Routes/courseRoutes')
require ("dotenv").config();
require ('./model/dbConnect')


app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use('/api/student', Studentroute);
app.use('/api/course', courseRoute)
app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests on : https://localhost:4000');
})