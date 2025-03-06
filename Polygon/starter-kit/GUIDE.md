# Polygon Starter Kit Guide

Welcome to the Polygon Starter Kit! This guide will help you set up your development environment, deploy your first smart contract, and build a simple dApp on Polygon.

---

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git
- MetaMask wallet

## 2. Clone the Starter Kit
```bash
git clone <your-repo-url>
cd Polygon/starter-kit/template
```

## 3. Install Dependencies
```bash
npm install
# or
yarn install
```

## 4. Configure Networks
- Open `hardhat.config.js` and set your Polygon RPC URL and private key (use environment variables for security).

## 5. Compile Contracts
```bash
npx hardhat compile
```

## 6. Deploy to Polygon Mumbai Testnet
```bash
npx hardhat run scripts/deploy.js --network mumbai
```

## 7. Interact with Your Contract
- Use the provided frontend in `template/frontend` to connect your wallet and interact with the deployed contract.

## 8. Resources
- [Polygon Docs](https://docs.polygon.technology/)
- [Hardhat Docs](https://hardhat.org/getting-started/)
- [Polygon Faucet](https://faucet.polygon.technology/)

---

Happy hacking on Polygon!