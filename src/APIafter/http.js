let express = require('express');
let app = express();
let { readFile, writeFile } = require('./promiseFs')
let md5 = require('md5')
let qs =require('qs')

app.listen(3000, function () {
    // console.log(md5('1234456'))
    console.log('后台服务起于3000')
})

app.use((req, res, next) => {
    readFile('./json/myrecommend.json').then(data => {
        // console.log(data)
        req.data = JSON.parse(data)
        next();
    }).catch(err => res.status(500))
    
})

// 尚帅 use start
app.use((req, res, next) => {
    readFile('./json/home.json').then(data => {
        // console.log(data)
        req.homeData = JSON.parse(data)
        next();
    }).catch(err => res.status(500))
    
})

app.use((req, res, next) => {
    let strshang = '';
    req.on('data', (chunkshang) => {
        strshang += chunkshang;
    })
    req.on('end', () => {
        let objshang = {};
        try {
            objshang = JSON.parse(strshang)
        } catch (error) {
            objshang = qs.parse(strshang)
        }
        req.bodyshang = objshang;
        next();
    })
})
app.use('/home',require('./home.js'))
//// 尚帅 use end


// 我的推荐接口
app.get('/index/my', function (req, res) {
    let data = req.data;
    // console.log(data)
    res.send({
        code: 0,
        data: Object.values(data),
    })
})


// 登录接口
app.use((req, res, next) => {
    readFile('./json/user.json').then(data => {
        req.userData = JSON.parse(data.toString())
        next();
        return req.userData
    }).catch(err => res.status(500));
})


app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})

app.post('/login', function (req, res) {
    // let { username, password } = req.userData;
    let ary = req.userData;
    let type = req.body;
    let temp;

    temp = ary.some(item => (item.username == type.username) && (item.password == type.password))

    if (temp) {
        res.send({
            code: 0
        })
    } else {
        res.send({
            code: 1
        })
    }

    console.log('req.userData', req.userData)
    console.log('req.body', req.body)
})


// 注册接口
// 接收数据
app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        // 接收到注册页面写入的数据
        req.sign = obj;
        next();
    })
})

app.post('/sign', function (req, res) {
    readFile('./json/user.json').then(data => {
        data = JSON.parse(data);
        console.log(data)
        Object.assign(data, req.body)
        // 将注册的数据合并到user.json
        return writeFile('./json/user.json', JSON.stringify(data))
    }).then(data => {
        console.log(data)
    })
})




app.use((req,res)=>{
    res.status(404),
    res.send('asd')
})
