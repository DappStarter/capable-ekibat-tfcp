require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note noble honey give arm army genuine'; 
let testAccounts = [
"0x61444aca913ae1afde67081d43eac1ec4d1f21023409a4b5f559b61bcf00d719",
"0x31bef1471a35af5acf3b16d02192f09200fa33370586d34354eb2962b7647446",
"0x4de6e20646afdf6d1e868a152f5585abca585257eb442dbd9fdfcaf831c07fdf",
"0x686200fb1ba17f13dbdee5c717f302f95bd27e5651bb2cf49580d9e0e4bcf039",
"0x1597bc4da858d0e9f62ce017ec4056c0c37abd95c39ceeb0d4600f4558709813",
"0x30793e2464daf4c0af1114eb2be62122fbaf67d15ebe3f2ffefe0048805ddc2c",
"0xda16d9ced111cbc6c31bdd9bb6037e20e29ed15c576711dc556c47e49f781fb2",
"0x8280b78988c1d6b53d6dec9b98cc28d718f0fec35b65207d67dc16d4209a6456",
"0xbf3b841a2abb3a636afe923a972228ec608a29193f56df779c7ed09b0846074b",
"0xec76cbd916112db6997e65e1b45b5d8cbd8f9d07992bf0b8195279a6de2c9db9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

