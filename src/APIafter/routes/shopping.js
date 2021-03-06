const express = require('express'),
	route = express.Router();

const { readFile, writeFile } = require('../promiseFs')


//=>获取商品详细信息
route.get('/proudct', (req, res) => {
    let { id = 0 } = req.query;
    let shopData = req.productList.find( item => {
        let product = item.product.find(value => value.productId == id
        )
        return product
    })
    let data = shopData.product.find(item =>{
        return item.productId = id;
    })
    data.shopId = shopData.shopId,
    data.shopName = shopData.name,
    res.send({
        code: 0,
        data: data,
    })
});


//=>获取店铺详细信息
route.get('/shop', (req, res) => {
    let { shopId = 0 } = req.query;
    let shopData = req.productList.find( item => item.shopId == shopId);
    res.send({
        code: 0,
        data: shopData,
    })
});

//=>获取所有店铺
route.get('/allShop', (req, res) => {
    res.send({
        code: 0,
        data: req.productList,
    })
});

//获取全部商品
route.get('/allProudct', (req, res) => {
    let proudct = [];
    req.productList.map( item => {
        item.product.map(value =>{
            proudct.push(value);
        })
    })
    res.send({
        code: 0,
        data: proudct,
    })
});


//=>获取购物车详细信息
route.get('/cart', (req, res) => {
    let { username = '' } = req.query;
    let uaerList = Object.keys(req.cartList);
    let data = uaerList.find( item => item == username);
    res.send({
        code: 0,
        data: req.cartList[data]
    })
});

//=>加入购物车
// selectedSkuComb{
//     shopId:,
//     name:'XXX',
//     joincart: [
//         {
//             productId: 1,
//             skuId:1,
//             title: "",
//             picture:"",
//             price: 26999,
//             num:3,
//             isSelect: false,
//             item:{
//                 CCC:cCC
//             }
//         }
//     ]

// }
route.post('/addCart', (req, res) => {
    // let uaerList = Object.keys(req.cartList);
    // let data = uaerList.find( item => item == username);
    let { username,shopId, joincart} = req.body;
    let user = req.cartList[username];
    if(user){
        var shopFinded = req.cartList[username].find(item => item.shopId == shopId);//购物车中是否已存在此店铺
        if(shopFinded){
            var productFinded =  shopFinded.joincart.find(item => item.productId == joincart[0].productId);//店铺中是否已存在此商品
            if(productFinded){
                var skuFinded =  shopFinded.joincart.find(item => item.skuId == joincart[0].skuId);//商品中是否已存在此sku
            }
        }
    }
    
    if(!user){
        req.cartList[username] = [req.body];
    } else {
        if(!shopFinded){
            req.cartList[username].push(req.body);
        } else {
            let newDate = req.cartList[username].map(item => {
                if(item.shopId == shopId){
                    if(skuFinded){
                        if(item.shopId == shopId){
                            item.joincart = item.joincart.map(value =>{
                                if(value.productId == joincart[0].productId && value.skuId == joincart[0].skuId){
                                    value.num += joincart[0].num;
                                }
                                return value;
                            });
                        }
                    } else if(productFinded || shopFinded){
                        if(item.shopId == shopId){
                            item.joincart.push(joincart[0]);
                        }
                    }
                }
                return item;
            });
            req.cartList[username] = newDate;
        }
    }
    
    writeFile('./json/shopping-cart.json', JSON.stringify(req.cartList)).then(() => {
		res.send({
            code: 0,
            data: req.cartList,
            message: "加入成功"
        });
	}).catch(() => {
		res.send({
            code: 0,
            message: "加入失败"
        });
	});
})


//编辑购物车
route.post('/editCart', (req, res) => {
    let { username, shopId, joincart} = req.body;
    req.cartList[username] = req.cartList[username].map(item => {
        if(item.shopId == shopId){
            item.joincart.map(value => {
                if(value.skuId == joincart[0].skuId){
                    value = joincart[0];
                }
                return value;
            })
        }
        return item;
    });
    writeFile('./json/shopping-cart.json', JSON.stringify(req.cartList)).then(() => {
		res.send({
            code: 0,
            data: req.cartList,
            message: "编辑成功"
        });
	}).catch(() => {
		res.send({
            code: 0,
            message: "编辑失败"
        });
	});
})
route.post('/creatOrder', (req, res) => {
    console.log(req.body);
})

//=>查询接口
route.post('/search', (req, res) => {
    let { keyword } = req.body;
    let product = [];
    req.productList.map( item => {
        item.product.map(value =>{
            if(value.goods.title.indexOf(keyword)  != -1){
                product.push(value);
            }
        })
    })
    res.send({
        code: 0,
        data: product
    })
});


module.exports = route;