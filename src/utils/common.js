/**
 * 
 * @param {*} req Request
 * @param {*} headerName 
 * @returns header value
 */
function getHeader(req,headerName){
    const headerValue = req.headers[headerName];
    return headerValue || ''
}

module.exports = {
    getHeader
}