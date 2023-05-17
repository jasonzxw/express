/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-05-17 10:07:37
 * @FilePath: \express\src\demo2-basicRouting\index.js
 */
// app.METHOD(PATH, HANDLER)
// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

const express = require('express');
const common = require('../utils/common')
const app = express();

app.get('/',(req,res) => {
    console.log(common.getHeader(req,'x-user'))
    res.send('hello world')
})

app.post('/send',(req,res) => {
    res.send('send')
})

app.listen('7899' , () => {
    console.log(`server is running`)
})