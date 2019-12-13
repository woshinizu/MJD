let express = require('express');
let session = require('express-session')
let qs = require('qs');
let app = express();
let { readFile, writeFile } = require('./promiseFs')
let md5 = require('md5')

app.listen(3000, function () {
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

/* app.use((req, res, next) => {
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
}) */
// app.use('/home',require('./home.js'))
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
    readFile('./json/hdpic.json').then(data => {
        req.hdImg = JSON.parse(data.toString())
        next();

    })
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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', "Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    next()
})

app.use(session({
    name: 'a',
    secret: 'b',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}))


// 登录接口
app.post('/login', function (req, res) {
    let ary = req.userData;
    let { username, password } = req.body;
    let temp;
    temp = ary.some(item => (item.username == username) && (item.password == password))
    if (temp) {
        // 登陆成功给session种植了一个userId属性
        req.session.userId = username;
        res.send({
            code: 0,
            data: {
                name: req.session.userId
            }
        })
    } else {
        res.send({
            code: 1,
            data: 'err'
        })
    }
})

// 上面中间件中的req.session.userId大有用处 我们在请求页面，判断是否是登录状态的时候可以用req.session.userId；


// 我的中的推荐列表接口
app.post('/index/my', function (req, res) {
    let data = req.data;
    console.log(req.session)
    // console.log(req.hdImg)
    if (req.session.userId) {
        res.send({
            code: 0,
            data: Object.values(data),
            userdata: req.session.userId,
            img:req.hdImg
        })
    }else{
        res.send({
            code: 1,
            // data: Object.values(data),
            // userdata: req.session.userId,
            // img:req.hdImg
        })
    }
})



// 注册接口
app.post('/sign', function (req, res) {
    // 实现注册接口
    let { username, password } = req.body;
    let data = req.userData;
    let judge = data.some(item => {
        return item.username === username
    })
    if (judge) {
        res.send({
            code: 1,
            msg: 'already'
        })
        return;
    }
    data.push(req.body);
    writeFile('./user.json', JSON.stringify(data)).then(data => {
        // 写入成功
        res.send({
            code: 0,
            data: 'success'
        })
    }).catch(() => {
        res.send({
            code: 1,
            data: 'fail'
        })
    })
})


// 请求setting页面接口
app.post('/setting', function (req, res) {
    let data = req.data;
    console.log(req.session)
    if (req.session.userId) {
        res.send({
            code: 0,
            userdata: req.session.userId,
            img:req.hdImg
        })
    }
})


// 清除session.userId接口
app.post('/delSession', function (req, res) {
    // req.session.removeAttribute(req.session.userId)
    req.session.userId = null;
    if (!req.session.userId) {
        res.send({
            code: 0,
        })
    }
})


// 首页请求接口
app.post('/index', function (req, res) {
    if (req.session.userId) {
        res.send({
            code: 0,
            // userdata: req.session.userId
        })
    }
})

// 发现接口
app.get('/found',function(req,res){
    if(req.session.userId){
        res.send({
            code:0
        })
    }
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~上面是zdj的接口~~~~~~~~~~~~~~
app.post('/sign', function (req, res) {
    readFile('./json/user.json').then(data => {
        data = JSON.parse(data);
        Object.assign(data, req.body)
        // 将注册的数据合并到user.json
        return writeFile('./json/user.json', JSON.stringify(data))
    }).then(data => {
        console.log(data)
    })
})

//======================杨洋=====================================
//获取商品列表
app.use((req, res, next) => {
    readFile('./json/productList.json').then(data => {
        req.productList = JSON.parse(data)
        next();
    }).catch(err => res.status(500))
})

//获取用户购物车列表
app.use((req, res, next) => {
    readFile('./json/shopping-cart.json').then(data => {
        req.cartList = JSON.parse(data)
        next();
    }).catch(err => res.status(500))
})

app.use('/shopping', require('./routes/shopping'));
app.use((req,res)=>{
    res.status(404),
    res.send('asd')

})
