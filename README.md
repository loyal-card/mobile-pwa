# Loyal card mobile client
## Introduction
I am a regular coffee consumer and see lots of the coffee shop use paper-based cards to reward customers with regular purchases. There are lots of paper waste of this solution and the data is not tracked and the stamp verification can be hacked easily.
So the idea is to create a digital loyalty card solution to reduce the paper usage that can protect our environment to some extent. Also, as the spreading of the COVID-19, this solution also reduces the unnecessary contact during the business activity as the whole process is contact-less. Meanwhile, this digital solution will keep the data for reporting and future big-data analysis for the customer coffee consumption behavior if the data collection is accumulated to a certain amount, and the scan verification on the one time QR code token can make sure the security of the system.
This is a MVP (Most viable product) that verifies that the solution is feasible and makes sure the core functionalities are achieved, there will be an ongoing development road-map to extend the features of this solution.
The whole solution consists of three components, `core-service` , `admin-dashboard` and `client-mobile-app`.
This`client-mobile-app` will be used by the customer.
### Highlights
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Authentication is managed by [Auth0](https://auth0.com/)
- QR Code generated to be verified for purchase.
- Use Web Socket to get the verified result from server push.
- Use Github Action for CI/CD and deployed to Github pages
## Getting started
### Prerequisites
1. Node: any version starting with 10.16.0 or greater
  - run `node --version` to check current node version
  - If you need to upgrade or install [NodeJs](http://nodejs.org/) : suggest to install via [Node Version Manager NVM](https://github.com/creationix/nvm)
2. A clone or download of this repo on your local machine
### Installation
1. `cd` to the project root
2. `npm install`to install the npm dependencies
### Running locally
- `npm run start` to start cypress dashboard and run all automation
### Deployment
- The CI/CD is managed with Github Action, the config file is in `.github/workflows/master_deploy.yml`, the multiple steps workflow can be configured to add more tasks like tests or eslint, and the environment variables can be configured as well
- You can run the `npm run deploy` to deploy the project directly to Github Pages.
