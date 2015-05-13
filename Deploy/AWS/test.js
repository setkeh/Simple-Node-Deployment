var AWS = require('aws-sdk');
var ec2 = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15});
var config = require('./config');

var params = {
};

//ec2.describeInstances(params, function(err, data) {
//  if (err) console.log(err, err.stack); // an error occurred
//  else     console.log(data.Reservations[0].Instances[0].NetworkInterfaces);           // successful response
//});

ec2.describeSecurityGroups(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data.SecurityGroups[1].IpPermissions[0].IpRanges);           // successful response
});

//console.log(config.AddSecurity.IpPermissions[0])
//console.log(config.tags.instance1Name)
