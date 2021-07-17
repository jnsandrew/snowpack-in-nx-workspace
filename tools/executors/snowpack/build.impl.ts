const SnowpackBuild = require('snowpack');

module.exports = {
    default: async (_options) => {

        if (_options.noCache === true) {
            SnowpackBuild.clearCache()
        }

        const config = await SnowpackBuild.loadConfiguration({}, _options.snowpackConfig);
        await SnowpackBuild.build({config});

        return new Promise(async res => {
            res({ success: true });
        });
    },
};
