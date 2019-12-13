import http from './http'

export function getSkuList(id){
    return http.get('/shopping/proudct',{
        params:{id}
    })
}

export function getCartList(username){
    return http.get('/shopping/cart',{
        params:{username}
    })
}

export function addCart(option){
    return http.post('/shopping/addCart',option)
}  


export function getLogin(){
    return http.get('/shopcat')
}

export function getShop(shopId){
    return http.get('/shopping/shop',{
        params:{shopId}
    })
}