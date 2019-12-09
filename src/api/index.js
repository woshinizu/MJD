import http from './http'

export function searchList(option){
    return http.post('/list/search',option)
}