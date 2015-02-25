var AWS = require('aws-sdk'); 
var ec2 = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15});
var config = require('./config.json');
var params = config.ec2;

// Create the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instanceIdProxy = data.Instances[0].InstanceId;
  console.log("Created Proxy instance", instanceIdProxy);

  var InstanceIdNode1 = data.Instances[1].InstanceId;
  console.log("Created App Node1 Instance", InstanceIdNode1);

  var InstanceIdNode2 = data.Instances[2].InstanceId;
  console.log("Created App Node1 Instance", InstanceIdNode2);

  // Add tags to the instances
  ParamsProxy = {Resources: [instanceIdProxy], Tags: [
    {Key: 'Name', Value: config.tags.instance1Name}
  ]};
 ParamsNode1 = {Resources: [InstanceIdNode1], Tags: [
    {Key: 'Name', Value: config.tags.instance2Name}
  ]};
 ParamsNode2 = {Resources: [InstanceIdNode2], Tags: [
    {Key: 'Name', Value: config.tags.instance3Name}
  ]};

  ec2.createTags(ParamsProxy, function(err) {
    console.log("Tagging instance", err ? "failure" : "success");
  });
  ec2.createTags(ParamsNode1, function(err) {
    console.log("Tagging instance", err ? "failure" : "success");
  });
  ec2.createTags(ParamsNode2, function(err) {
    console.log("Tagging instance", err ? "failure" : "success");
  });
});
