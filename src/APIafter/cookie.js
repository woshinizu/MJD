 //  封装getcookie 
 function getcookie(key) {
    let str = document.cookie;
    str+='; '//让最后一个能够满足正则，这样只有一条cookie也能捕获。
    // let reg = new RegExp(`(^| )${key}=([^; ]+); `);
    // 或者 
    let reg = new RegExp(`(^| )${key}=([^; ]+); `);

    str.match(reg) ? str.match(reg)[1] : null;
}
// 封装removecookie(id)把日期设置成过期时间


function setcookie(key, value, data) {
    if(data){
        document.cookie = `${key}=${value};expires = ${new Date(data)}`
    }else{
        document.cookie = `${key}=${value};`
    }

}
function removecookie(key,domain){//必须要用指定域名才能删掉
let res = getcookie(key);
    if(domain){//必须要用指定域名才能删掉
        document.cookie = `${key}=null;domain = ${domain};expires = ${new Date(-1)}`;
    }
    document.cookie = `${key}=null;expires = ${new Date(-1)}`;//删除默认域名的
    return res
}
