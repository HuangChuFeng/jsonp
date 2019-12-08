var express = require('express');
var app = express();

app.get('/jsonp', function (req, res, err) {
    const callback = req.query.callback;
    const data = JSON.stringify({ msg: 'test data' });
    const resStr = callback + '(' + data + ')';
    console.log(resStr, Object.prototype.toString.call(resStr));
    res.end(resStr);
});

app.listen('8001', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("客户端在8001端口监听成功!");
    }
})