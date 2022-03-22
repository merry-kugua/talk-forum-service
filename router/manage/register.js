const Router = require("koa-router")
const queryFn = require('../../controllers/sealdb')
const strumsg = require('../../utils/strumsg')
const router = new Router();

router.post('/', async ctx => {
    let {username, password} = ctx.request.body
    if (username && password) {
        let sql = `select * from user where username = '${username}' `
        let result = await queryFn(sql)
        if (result.length > 0) {
            ctx.body = strumsg('2222', '当前用户已存在请勿重复提交','请勿重复提交')
        } else {
            let sqlReg = `insert into user value (null, '${username}', '${password}', null, 'avatar.jpeg')`
             await queryFn(sqlReg)
            ctx.body = strumsg('0000', '注册成功', result)
        }
    } else {
        ctx.body = strumsg('0000','error', '账号错误请重新输入')

    }
})
module.exports = router;