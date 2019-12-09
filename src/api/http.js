let express = require('express');
let app = express();
let { readfile, writefile } = require('express')
let md5 = require('md5')
app.listen(3000, function () {
    // console.log(md5('1234456'))
    console.log('后台服务起于3000')
})
