'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;
  }

  /**
 * @feature 校验 username email
 * @param value {String}
 * @param type {String}
 * @return ServerResponse.msg
 */
  async checkValid (type, value) {
    if (type.trim()) {

    }
    return this.ServerResponse.createByErrorMsg('参数错误');
  }

  /**
   * 新增用户
   */
  async add (user) {
    try {
      // console.log(user)
      user = await this.ctx.model.Users.create(user);
      if (!user) return this.ServerResponse.createByErrorMsg('注册失败');

      user = user.toJSON();

      return this.ServerResponse.createBySuccessMsgAndData('注册成功', user);
    } catch (e) {
      console.log(e);
      return this.ServerResponse.createByErrorMsg('注册失败');
    }
  }

  async getUserInfo (id) {
    try {
      const users = await this.ctx.model.Users.findOne({
        attributes: ['id', 'name', 'age', 'createtime'],
        where: {
          id: id
        }
      });
      // if (!users) return this.ServerResponse.createByErrorMsg('没有你要找的用户');
      return users;
    } catch (error) {
      console.log(error)
      return error;
    }


  }

  async list () {
    const users = await this.ctx.model.Users.findAll({
      include: [
        {
          model: this.app.model.Userinfo
        }
      ]
    });
    console.log(users)
    return users;
  }

  async selectBySQL (sql) {
    // console.log(sql)
    try {
      const users = await this.ctx.model.query(sql, { type: this.app.Sequelize.QueryTypes.SELECT });

      return users;
    } catch (error) {
      return error;
    }

  }
}

module.exports = UserService;