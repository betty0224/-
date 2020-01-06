module.exports = [{
    path: '/ajax.html',
    method: 'get',
    status: 200,
    response: function(req, res) {        //请求的返回内容
        return {
            "code": "200",
            "msg": "操作成功"
        }
    }
}]
