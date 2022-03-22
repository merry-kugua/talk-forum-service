const Router = require("koa-router")
const jwt = require('jsonwebtoken');
const strumsg = require('../../utils/strumsg')
const queryFn = require('../../controllers/sealdb')
const router = new Router();

router.post('/', async ctx => {
    let {username, password} = ctx.request.body
    console.log(username, password)
    if (username && password) {
        let sql = `select * from user where username = '${username}' and password = '${password}'`
        let result = await queryFn(sql)
        if (result.length > 0) {
            // 用户存在时
            let token=jwt.sign(
                {username,password},    // 携带信息
                'yiluo',          // 秘钥
                {expiresIn:'6h'}        // 有效期：6h一小时
            )
            // 将token 塞入 user表中
            let sqlToken = `update user set token = '${token}' where username = '${username}' `
            await queryFn(sqlToken)
            let updateResult = await queryFn(sql)
            ctx.body = strumsg('10006 ', '登陆成功',updateResult)

        } else {
            ctx.body = strumsg('10002', '账号或密码错误请重新登陆')
        }
    }
    else {
        ctx.body = strumsg('10004', '当前用户不存在请先注册')

    }
})
module.exports = router;