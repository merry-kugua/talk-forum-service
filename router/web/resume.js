const Router = require("koa-router")
const queryFn = require('../../controllers/sealdb')
const strumsg = require('../../utils/strumsg')

const router = new Router();
router.get('/list', async ctx => {
    let selectResumesql = `select username, phone, email, sex, age, pseudonym, jobPosition, personalTechnologyTtack, companystatus, experience from resume where username = '龚宇' limit 1`;
    let Result = await queryFn(selectResumesql)
    if (Result.length > 0) {
       ctx.body = strumsg("20000", "select resume About Yu is success", Result);
    }
})
router.get('/project/list', async ctx => {
    let sqlProject = `select projectName, projectTime, technologystack, myduty, projectintroduction, projectsummary, workingcompany from resume where username = '龚宇'`;
    let Result = await queryFn(sqlProject)
    if (Result.length > 0) {
        ctx.body = strumsg("20000", "select resume About Yu is success", Result);
    }
})
module.exports = router;