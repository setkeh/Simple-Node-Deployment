var AWS = require('aws-sdk');
var ec2 = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15});
var config = require('./config.json');
var params = config.AddSecurity;

ec2.authorizeSecurityGroupIngress(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
