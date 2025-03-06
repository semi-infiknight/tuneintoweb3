# Solana Starter Kit Guide

Welcome to the Solana Starter Kit! This guide will help you set up your development environment, deploy your first smart contract (program), and build a simple dApp on Solana using Rust and Anchor.

---

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git
- Rust (via rustup)
- Solana CLI
- Anchor CLI

## 2. Install Solana CLI
```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
solana --version
```

## 3. Install Rust & Anchor
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
avm install latest
avm use latest
anchor --version
```

## 4. Clone the Starter Kit
```bash
git clone <your-repo-url>
cd Solana/starter-kit/template
```

## 5. Install JS Dependencies (for frontend)
```bash
npm install
# or
yarn install
```

## 6. Build and Deploy the Program
```bash
anchor build
anchor deploy
```

## 7. Interact with Your Program
- Use the provided frontend in `template/app` to connect your wallet and interact with the deployed program.

## 8. Resources
- [Solana Docs](https://docs.solana.com/)
- [Anchor Docs](https://book.anchor-lang.com/)

---

Happy hacking on Solana!