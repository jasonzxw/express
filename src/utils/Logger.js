class Logger {
    constructor(){
    }
    log = (msg) =>{
        console.log(`${new Date()}: ${msg}`)
    }
}

module.exports = new Logger();