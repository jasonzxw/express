/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-05-17 10:32:46
 * @FilePath: \express\src\demo3-routing\controller\LoginControlLer.js
 */
class LoginCroller{
    constructor(){

    }

    login = (req,res) => {
        res.send('hello world')
    }
}

module.exports = new LoginCroller()