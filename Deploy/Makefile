PROJECT = "Simple Nodejs Deployment"

all: ;@echo "Building the Entire Project for ${PROJECT}"; \
  instances;

security: ;@echo "Creating ${PROJECT} Security Groups and populating with defaults"; \
  createsecuritygroup; \
  portforwards;

instances: ;@echo "Asking Amazon Nicely to create ${PROJECT} Instances"; \
  node instances.js;

createsecuritygroup: ;@echo "Creating cluster security group"; \
  node createsecurity.js;

portforwards: ;@echo "Opening Ports"; \
	node addsecurity.js;
