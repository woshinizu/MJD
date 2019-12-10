let express = require('express');
let router = express.Router()
// 所搜接口 尚帅

// 我的推荐接口
router.get('/searchList', function (req, res) {
    console.log(6666)
    let data = req.homeData;
    let datashang = req.datashang// 尚帅
    // console.log(data)
    res.send({
        code: 0,
        datashang:Object.values(data)
    })
})

router.post('/searchList',function (req,res){
    console.log('req.homeData',req.homeData)
    console.log('req.bodyshang',req.bodyshang)
    if(req.homeData){
        req.homeData.send({
            keywords:data.keywords,
            flag:data.flag,
            left:data.flag,
        })
    }else{
        req.homeData.send({
            key:'没有该商品',
        })
    }
})

module.exports = router

// 结束