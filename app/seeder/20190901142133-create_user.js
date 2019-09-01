'use strict';
const utils = require('utility');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      email: 'test_email',
      password: utils.md5('000000'),
      inviter_id: 0,
      username: 'test',
      weixin: 'weixin_123',
      weibo: 'weibo_123',
      receive_remote: 0,
      email_verifyed: 1,
      avatar: 'https://images-1257104152.cos.ap-shanghai.myqcloud.com/20180327050725335.jpg',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users');

  },
};
