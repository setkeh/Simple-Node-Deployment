var AWS = require('aws-sdk');
var ec2 = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15});
var config = require('./config');

console.log(config.AddSecurity.IpPermissions[0])
console.log(config.tags.instance1Name)
