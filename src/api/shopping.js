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