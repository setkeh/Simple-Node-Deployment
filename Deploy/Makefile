PROJECT = "Simple Nodejs Deployment"

all: ;@echo "Building the Entire Project for ${PROJECT}"; \
  instances 

instances: ;@echo "Asking Amazon Nicely to create ${PROJECT} Instances"; \
  node instances.js

createsecuritygroup: ;@echo "Creating Group security group and adding open ports"; \
  node createsecurity.js
