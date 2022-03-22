const Router = require("koa-router")
const login = require('./login')
const register = require('./register')

const router = new Router();
// 到处数据库连接

// 登陆
router.use('/login', login.routes(), login.allowedMethods())
// 注册
router.use('/register', register.routes(), register.allowedMethods())
module.exports = router;