const Router = require("koa-router")
const fontweb = require("./fontweb")
const resume = require("./resume")
const router = new Router();

router.use('/fontweb/yublog', fontweb.routes(), fontweb.allowedMethods())
router.use('/fontweb/resume', resume.routes(), resume.allowedMethods())
module.exports = router;
