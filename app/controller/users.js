'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;
  }

  async add () {
    const user = this.ctx.request.body;
    console.log(user)
    // console.log(this.ctx.request)
    const respponse = await this.ctx.service.users.add(user);
    this.ctx.body = respponse;
  }

  async getUserInfo () {
    // const userID = this.ctx.request.body.userID;
    const userID = this.ctx.request.query.userID;
    console.log(userID)
    const users = await this.ctx.service.users.getUserInfo(userID);
    console.log(users)
    if (users) {
      this.ctx.body = this.ServerResponse.createBySuccessMsgAndData('获取成功', users);
    } else {
      this.ctx.body = this.ServerResponse.createByErrorMsg('没有你要找的用户');
    }
  }

  async list () {
    const users = await this.ctx.service.users.list();
    this.ctx.body = this.ServerResponse.createBySuccessMsgAndData('获取成功', users);
  }

  async selectBySQL () {
    const sql = 'select * from users'
    const users = await this.ctx.service.users.selectBySQL(sql);
    this.ctx.body = this.ServerResponse.createBySuccessMsgAndData('获取成功', users);
  }

}

module.exports = UserController;