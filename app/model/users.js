'use strict';
const assert = require('assert');
var moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Users = app.model.define('users', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(10),
      allowNull: false,
    },
    age: {
      type: STRING(10),
      allowNull: false,
    },

    createtime: {
      type: DATE,
      allowNull: true,
      defaultValue: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      get () {
        return moment(this.getDataValue('createtime')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
  }, {
      freezeTableName: true,
      tableName: 'users',
      timestamps: false,
    });

    Users.associate = function () {
    assert.ok(app.model.Users);
    assert.ok(app.model.Userinfo);
    app.model.Users.hasOne(app.model.Userinfo, { foreignKey: 'id' });
    // app.model.User.hasMany(app.model.Family, { foreignKey: 'userId', targetKey: 'id' });
  }
  Users.sync({ alter: true }) //同步model到数据库
  return Users;
};