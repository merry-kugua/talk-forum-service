// 引入mysql
const mysql = require("mysql");
const config = require('./config')

// 创建连接池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});
//对数据库进行增删改查操作的基础
const query = function( sql, callback ) {
pool.getConnection(function(err, connection) {
  // 使用连接
  connection.query( sql, function(err, rows) {
    // 使用连接执行查询
      // 使用callback 回调释放连接池
      callback(err,rows);
      connection.release();
  });
});
}
module.exports = query
