const express = require('express');

const app = express();
const router = require('./routing/LoginRouter')

app.use(router)

app.listen('7899' , () => {
    console.log(`server is runing`)
})