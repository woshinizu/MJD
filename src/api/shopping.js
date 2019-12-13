import http from './http'

export function getSkuList(option){
    return http.get('/shopping/skuList',option)
}