require ('babel-register');
require ('babel-polyfill');

module.export = {
    networks: {
        development: {
            host: '127.0.0.1:',
            port: '7545',
            network_id: '*',  // This enables us to conect to any network
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/truffle_abis/',

    compilers: {
        solc: {
            version: '^0.5.0',
            optimiser: {
            enable: true,
            runs: 200,
            },

        },
    },
}