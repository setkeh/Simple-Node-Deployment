# Simple-Node-Deployment
A simple node deployment for AWS with reverse proxy and load balancing.

I have Added a basic Nginx config for load balancing and reverse proxy but there maybe a way to turn that into a puppet manifest according to 

	https://forge.puppetlabs.com/jfryman/nginx

This is the Upstream puppet module.

Adding that to the ToDo list.

EC2 Instance creation script is working but needs some manual intervention for the EC2 Node.js library namely it needs an API key to do this create the file,

	~/.aws/credentials

And add the following data,

	[default]
	aws_access_key_id = <YOUR_ACCESS_KEY_ID>
	aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>

If you need to use Multiple API keys you can follow,

	http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Using_Profiles_with_the_SDK

To setup api profiles.

API Profiles will Require the following modification to [instances.js](Deploy/instances.js) 

	var credentials = new AWS.SharedIniFileCredentials({profile: 'ProfileName'});
	AWS.config.credentials = credentials;

there is probably a better way of doing than hardcoding it in the JS and i shall add it to the todo list.


# To-Do
My List of To-Do's to improve the current code.

  * Nginx Puppet module to setup the Proxy and Load balancer according to the upstrem module
  * Find the best way of implimenting AWS key profiles instead f hardcoding the config in the JS
