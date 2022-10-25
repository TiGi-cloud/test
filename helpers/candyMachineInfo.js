export const candyMachineAddress = "0x8575f72584f85fee8c97cce53c9c54427b764eccc19ae1b13050cd8448e6885b";
export const collectionName = "Monster Teacher"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs//QmXZcS2MBiWxj3w92CP3sQGSy2dAQhrXx4gYuKpd4stcXH";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
