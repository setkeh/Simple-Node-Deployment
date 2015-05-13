PROJECT = "Simple Nodejs Deployment"

all: instances

security: ;@echo "Creating ${PROJECT} Security Groups and populating with defaults"; \
  createsecuritygroup; \
  portforwards;

instances: ;@echo "Asking Amazon Nicely to create ${PROJECT} Instances"; \
  node AWS/instances.js;

createsecuritygroup: ;@echo "Creating cluster security group"; \
  node AWS/createsecurity.js;

portforwards: ;@echo "Opening Ports"; \
  node AWS/addsecurity.js;
