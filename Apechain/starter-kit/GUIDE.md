# Apechain Starter Kit Guide

Welcome to the Apechain Starter Kit! This guide will help you set up your development environment, deploy your first smart contract, and build a simple dApp on Apechain (EVM-compatible, gaming/NFT focus).

---

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git
- MetaMask wallet

## 2. Clone the Starter Kit
```bash
git clone <your-repo-url>
cd Apechain/starter-kit/template
```

## 3. Install Dependencies
```bash
npm install
# or
yarn install
```

## 4. Configure Networks
- Open `hardhat.config.js` and set your Apechain RPC URL and private key (use environment variables for security).

## 5. Compile Contracts
```bash
npx hardhat compile
```

## 6. Deploy to Apechain Testnet
```bash
npx hardhat run scripts/deploy.js --network apechainTestnet
```

## 7. Interact with Your Contract
- Use the provided frontend in `template/frontend` to connect your wallet and interact with the deployed contract.

## 8. Resources
- [Apechain Docs](https://docs.apechain.com/)
- [Hardhat Docs](https://hardhat.org/getting-started/)

---

Happy hacking on Apechain!