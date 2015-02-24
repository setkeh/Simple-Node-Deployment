# Deploy a Node/Express application

Write scripts to deploy this generated Nodejs/Express application.

A couple of assumptions:

- Your production environment is AWS
- Your environment can hit external sources
- OS is Ubuntu 14.04
- You're using a reverse proxy (such as Nginx) in production

Use shell scripts and Puppet manifests to:

- Provision a new host
- Configure the host to serve the application on :80
- Deploy the application code to the host
- Bootstrap the application

Also, please provide a README that provides a high-level explanation of what you did, and why. 

Bonus points for:

- Good Security Defaults (strong password/SSH rules, etc.)
- Implementing failure tolerance in case of crash
- Continuous Integration integration
- Performance considerations for Node applications