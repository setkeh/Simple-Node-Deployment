var config = {} 

config.tags = {
	"instance1Name": "Simple-Nodejs-Proxy",
	"instance2Name": "Simple-Nodejs-Node1",
	"instance3Name": "Simple-Nodejs-Node2"
};

config.ec2 = {
	"ImageId": "ami-abeb9e91",
	"InstanceType": "t2.micro",
	"MinCount": "3",
	"MaxCount": "3"
};

config.CreateSecurity = {
	"Description": "Simple-Node-Deployment",
	"GroupName": "Simple-Node-Security"
};

config.AddSecurity = {
	"GroupId": "sg-b2c175d7",
	"GroupName": "Simple-Node-Security",
	"IpPermissions": [ 
		{
		"FromPort": "3000",
		"IpProtocol": "TCP",
		"IpRanges": [ 
		{
			"CidrIp": "0.0.0.0/0"
		}],
		"ToPort": "3000"
		},
		{
		"FromPort": "80",
		"IpProtocol": "TCP",
		"IpRanges": [ 
		{
			"CidrIp": "0.0.0.0/0"
		}],
		"ToPort": "80"
		}
	]
};

module.exports = config;
