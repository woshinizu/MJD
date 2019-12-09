import axios from 'axios';

let url = process.env.NODE_ENV !== 'production' ? '' : ''; 

const http = axios.create({
    baseURL: url,
    transformRequest(data){
        console.log(data)
        let str = '';
        for(let k in data){
            str += `${k}=${data[k]}&`
        }
        return str;
    },
    params:{
        t: Math.random()
    },
    timeout: 1000,
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加拦截响应器
http.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    return response.data;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// export default http;
// let express = require('express');
// let app = express();
// let { readfile, writefile } = require('express')
// let md5 = require('md5')
// app.listen(3000, function () {
//     // console.log(md5('1234456'))
//     console.log('后台服务起于3000')
// })