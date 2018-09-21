'use strict';
const assert = require('assert');
var moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Userinfo = app.model.define('userinfo', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: INTEGER,
      allowNull: false,
    },
    address: {
      type: STRING(50),
      allowNull: true,
    },
    sex: {
      type: STRING(10),
      allowNull: true,
    },
    updatetime: {
      type: DATE,
      allowNull: true,
      defaultValue: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      get () {
        return moment(this.getDataValue('createtime')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
  }, {
      freezeTableName: true,
      tableName: 'userinfo',
      timestamps: false,
    });

  Userinfo.associate = function () {
    // console.log(app.model)
    // assert.ok(app.model.Users);
    // assert.ok(app.model.Userinfo);
    app.model.Userinfo.belongsTo(app.model.Users, { foreignKey: 'userID', targetKey: 'id' });
  }
  Userinfo.sync({ alter: true }) //同步model到数据库
  return Userinfo;
};