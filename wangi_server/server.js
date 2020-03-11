let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

let cateLists = require('./datas/cateLists.json')
let cateNavDatas = require('./datas/cateNavDatas.json')
let index = require('./datas/index.json')
let indexCateModule = require('./datas/indexCateModule.json')



router.get('/cateLists', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = cateLists
});
router.get('/cateNavDatas', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = cateNavDatas
});
router.get('/index', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = index
});
router.get('/indexCateModule', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = indexCateModule
});


router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
