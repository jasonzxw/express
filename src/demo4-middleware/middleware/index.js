module.exports = function (req,res,next) {
    console.log(new Date());
    next();
}