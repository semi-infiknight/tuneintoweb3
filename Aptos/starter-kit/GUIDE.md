# Aptos Starter Kit Guide

Welcome to the Aptos Starter Kit! This guide will help you set up your development environment, deploy your first Move smart contract, and build a simple dApp on Aptos.

---

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git
- Aptos CLI
- Move language basics

## 2. Install Aptos CLI
```bash
curl -sSL https://aptos.dev/cli-install.sh | sh
aptos --version
```

## 3. Clone the Starter Kit
```bash
git clone <your-repo-url>
cd Aptos/starter-kit/template
```

## 4. Set Up Your Wallet & Faucet
```bash
aptos init
aptos account fund-with-faucet --account default
```

## 5. Compile Move Contracts
```bash
aptos move compile
```

## 6. Publish to Aptos Testnet
```bash
aptos move publish --profile default
```

## 7. Interact with Your Contract
- Use the provided frontend in `template/frontend` or CLI commands to interact with your deployed contract.

## 8. Resources
- [Aptos Docs](https://aptos.dev/)
- [Move Book](https://move-language.github.io/move/)

---

Happy hacking on Aptos!