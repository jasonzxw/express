/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-05-17 09:52:56
 * @FilePath: \express\src\demo1-simple\index.js
 */
const express = require('express');
const Logger = require('../utils/Logger')
const app = express();

app.get('/',(req,rsp,next) => {
    Logger.log(`path: ${req.url} visited`)
    rsp.send('hello world')
})

app.listen('7899', () => {
    Logger.log(`server is running`)
})