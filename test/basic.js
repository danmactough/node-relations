describe('memory store', function () {
  doBasicTest();
});

describe('mysql store', function () {
  var mysql = require('mysql');
  doBasicTest('mysql', {client: mysql.createConnection({user: 'root', database: 'test'})});
});

describe('redis store', function () {
  var redis = require('redis');
  doBasicTest('redis', {client: redis.createClient()});
});