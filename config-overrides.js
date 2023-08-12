
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };
            // New config, e.g. config.plugins.push...
        // console.log(JSON.stringify(config.resolve.fallback))
        config.resolve.fallback = {
            crypto: false,
            util: false,
            stream: false,
            ...config.resolve.fallback
        };  
        return config
    }
