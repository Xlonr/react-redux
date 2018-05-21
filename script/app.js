const express = require('express')

const app = express()

// app.use('/', require('connect-history-api-fallback')())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log(res)
    next();
});

app.get('/', function (req, res, next) {
    console.log(res)
})

let server = app.listen(8080, function () {
    let port = server.address().port
    console.log(port)
})