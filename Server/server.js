const express = require('express');
const { ConnectDB } = require('./Config/ConnectDB');
const app = express()
require('dotenv').config()


ConnectDB()


const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`server is running on ${PORT}...`))