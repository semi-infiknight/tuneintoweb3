# Aptos dApp Best Practices

## Security
- Use environment variables for sensitive data (private keys, faucet URLs).
- Audit your Move modules (use Move Prover, formal verification tools).
- Use capability-based access control in Move.
- Avoid reentrancy and ensure resource safety.

## Performance
- Minimize storage usage in Move modules.
- Use events for off-chain data tracking.
- Batch transactions where possible.

## Development Workflow
- Use Aptos CLI for local development and testing.
- Write comprehensive Move tests.
- Use testnet before mainnet deployment.
- Keep dependencies up to date.
- Document your code and architecture.

## Resources
- [Aptos Security Best Practices](https://aptos.dev/guides/security/)
- [Move Book](https://move-language.github.io/move/)