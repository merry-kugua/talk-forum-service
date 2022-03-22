const Router = require("koa-router")
const queryFn = require('../../controllers/sealdb')
const strumsg = require('../../utils/strumsg')

const router = new Router();

// 获取首页barchats 数据图接口
router.get('/homelist/barcharts', async ctx =>{
    let sql = "select classifly, count from classifly"
    let Results = await queryFn(sql)
    console.log(Results)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    } else {
       ctx.body = strumsg("20002", "the barcharslist is not found")
    }
})
// 用户访问对应的type 更新接口信息
router.post('/homelist/updataCount', async  ctx => {
    let { dataType } = ctx.request.body;
    if (dataType === "vue") {
        let sql = `update classifly set count = count + 1 where id = 1`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'vue'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }
    if (dataType === "JavaScript") {
        let sql = `update classifly set count = count + 1 where id = 2`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'JavaScript'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }
    if (dataType === "design") {
        let sql = `update classifly set count = count + 1 where id = 3`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'design'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }
    if (dataType === "applet") {
        let sql = `update classifly set count = count + 1 where id = 4`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'applet'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }
    if (dataType === "charts") {
        let sql = `update classifly set count = count + 1 where id = 5`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'charts'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }
    if (dataType === "react") {
        let sql = `update classifly set count = count + 1 where id = 6`
        let results = await queryFn(sql);
        if (results) {
            let sqlselect = `select count from classifly where classifly = 'react'`
            let updataCount = await queryFn(sqlselect)
            ctx.body = strumsg("20000","update successful",updataCount)
        }
    }

})
// 查询vue的文章列表
router.get('/article/vuelist', async ctx =>{
    let sql = `select id, title, author, short_info, tag, createTime, browse  from articlelist where tag = 'vue'`
    let Results = await queryFn(sql)
    if (Results) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
    // let sql = `select * from articlelist where tag = 'vue'`
    // let Results = await queryFn(sql)
    // let totalCount = Results.length
    // let { pageSize, currentPage} = ctx.request.body;
    // // if (!pageSize || !currentPage) {
    // //     ctx.body = strumsg("200004", "参数传递错误")
    // // }
    // // 数据分页处理
    // let sqlPage = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'vue' limit ${(currentPage - 1) * pageSize }, ${pageSize}`
    // let resulList = await queryFn(sqlPage)
    // ctx.body = strumsg("20000", "select successful", {
    //     totalCount, pageSize,currentPage,
    //     data: resulList
    // })
})
// 查询javascript的文章列表
router.get('/article/jslist', async ctx =>{
    let sql = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'js'`
    let Results = await queryFn(sql)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
})
// 查询design（设计模式）的文章列表
router.get('/article/designlist', async ctx =>{
    let sql = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'design'`
    let Results = await queryFn(sql)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
})
// 查询applet（小程序和uniapp）的文章列表
router.get('/article/appletlist', async ctx =>{
    let sql = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'applet'`
    let Results = await queryFn(sql)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
})
// 查询charts（图表 d3 echarts）的文章列表
router.get('/article/chartslist', async ctx =>{
    let sql = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'charts'`
    let Results = await queryFn(sql)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
})
// 查询react（图表 d3 echarts）的文章列表
router.get('/article/reactlist', async ctx =>{
    let sql = `select id, title, author, text_area, short_info, comment, is_hot from articlelist where tag = 'react'`
    let Results = await queryFn(sql)
    if (Results.length > 0) {
        ctx.body = strumsg("20000", "successful", Results)
    }else {
        ctx.body = strumsg("20006", "Data query is empty")
    }
})
// 编辑markdown 语法 录入文章信息
router.post('/article/insert/list', async  ctx => {
    let { datalist } = ctx.request.body;
    let sql = `insert into textarea (content) values ('${datalist}')`
    let result = await queryFn(sql)
    if (result) {
        ctx.body = strumsg("20000", "恭喜你文章发布成功! 请为学习贡献出自己的一份力量")
    } else  {
        ctx.body = strumsg("20004", "error filr")
    }
})
// 根据id 查询文章详情
router.get('/article/insert/list/id', async ctx => {
    let sql = `select content from textarea where id = 34`
    let result = await queryFn(sql)
    ctx.body = strumsg("20000", "select successful", result)
})
module.exports = router;