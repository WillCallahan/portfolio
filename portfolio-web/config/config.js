const dev = require('./dev.config');
const prod = require('./prod.config');

const getConfig = (environment) => {
	if (environment === 'development') {
		return dev;
	} else {
		return prod;
	}
};

module.exports = {
	getConfig
};