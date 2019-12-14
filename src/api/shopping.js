import http from './http'

//获取商品详情
export function getSkuList(id){
    return http.get('/shopping/proudct',{
        params:{id}
    })
}

//获取全部商品
export function getAllp(){
    return http.get('/shopping/allProudct')
}

//获取购物车信息
export function getCartList(username){
    return http.get('/shopping/cart',{
        params:{username}
    })
}

//查询接口
export function search(option){
    return http.post('/shopping/search',option)
}

//加入购物车
export function addCart(option){
    return http.post('/shopping/addCart',option)
}  


//编辑购物车
export function editCart(option){
    return http.post('/shopping/editCart',option)
}

//验证登陆
export function getLogin(){
    return http.get('/shopcat')
}

export function getShop(shopId){
    return http.get('/shopping/shop',{
        params:{shopId}
    })
}

export function getallShop(){
    return http.get('/shopping/allShop')
}
