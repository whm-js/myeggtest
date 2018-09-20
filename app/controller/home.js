'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const result = await this.app.model.User.findAll();
    // console.log(result);
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
