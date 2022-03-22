const query = require('./db')
/***
 *  author yu 对数据库的操作进行封装
 * @param sql
 * @returns {Promise<unknown>}
 */
const queryFn = (sql) => {
    return new Promise((resolve , reject) => {
        query(sql,(err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = queryFn