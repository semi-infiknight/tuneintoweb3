# SUI Starter Kit Guide

Welcome to the SUI Starter Kit! This guide will help you set up your development environment, deploy your first Move smart contract, and build a simple dApp on SUI.

---

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git
- SUI CLI
- Move language basics

## 2. Install SUI CLI
```bash
curl -sSf https://raw.githubusercontent.com/MystenLabs/sui/main/scripts/install.sh | sh
sui --version
```

## 3. Clone the Starter Kit
```bash
git clone <your-repo-url>
cd SUI/starter-kit/template
```

## 4. Set Up Your Wallet & Faucet
```bash
sui client new-address ed25519
sui client faucet --address <your-address>
```

## 5. Compile Move Contracts
```bash
sui move build
```

## 6. Publish to SUI Testnet
```bash
sui client publish --gas-budget 10000
```

## 7. Interact with Your Contract
- Use the provided frontend in `template/frontend` or CLI commands to interact with your deployed contract.

## 8. Resources
- [SUI Docs](https://docs.sui.io/)
- [Move Book](https://move-language.github.io/move/)

---

Happy hacking on SUI!