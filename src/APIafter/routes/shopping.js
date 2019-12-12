const express = require('express'),
	route = express.Router();

const { readFile, writeFile } = require('../promiseFs')


//=>获取客户详细信息
route.get('/skuList', (req, res) => {
    let data = req.skuList;
    res.send({
        code: 0,
        data: data,
    })
});

module.exports = route;