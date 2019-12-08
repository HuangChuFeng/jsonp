var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req, res, err) => {
    res.sendFile(path.join(__dirname, 'test.html'));//注意sendFile必须使用绝对路径,否则程序会报错
})

app.use(express.static('Scripts'));//路径不区分大小写

app.listen(8000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('端口8000监听成功!');
    }
})