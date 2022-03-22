/**
 * 返回体的结构信息
 * code： 0000 = 失败 1111 等于成功
 **/

const struMsg = (code, message, data) => {
   return {
       code: code || 0,
       message: message || '',
       data: data || {}
   }

}
module.exports = struMsg