require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area solve file cost rifle unknown coral light army giggle'; 
let testAccounts = [
"0x7ba934293368d9bede189252c2fef5067c256cdfa2c2f7b9a53f8fa5b64d58c8",
"0x4236019dabf1c1f1752cc5df2b41e409eb37fff3f5b421fed9a45daa7ebc59ad",
"0x58bbd187061666286964b88dcb214b2094472077b140dacaeb4c6c8cedd0db61",
"0x2138f821b90761e38b4c8c0d865e3a01cccdf8a73f2b3be30851d91f3a1aa6d4",
"0xf3f2faa37492657e61f34fa76b0afcc68b03b4e0120576bdd191622cef879666",
"0x549c2132d8a00e9c9691c160a6e32bfdc7fdce2e01b02d470b0d59be3954b4f2",
"0xcefefef4a644c94750052d47a74ba2a92a2443128cb6e5247d66e87b8ae75adf",
"0x24372cd0a6e655796145a5b21d3265ecfddcaa9284771d7a28ee5b49bf70ee9c",
"0xd461f21de43823216cfafa0623a31ac61102da2f7fe05725425a08dac58295cd",
"0xddd2ec2d18ec98d91bac635a76962147a5f97fb70e620f3e3f5c09cf264ac14b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


