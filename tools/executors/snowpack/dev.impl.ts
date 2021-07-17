const SnowpackDev = require('snowpack');

module.exports = {
    default: async (_options) => {
        if (_options.noCache === true) {
            SnowpackDev.clearCache()
        }

        const config = await SnowpackDev.loadConfiguration({}, _options.snowpackConfig);
        const server = await SnowpackDev.startServer({config});

        return new Promise(async res => {});
    },
};
