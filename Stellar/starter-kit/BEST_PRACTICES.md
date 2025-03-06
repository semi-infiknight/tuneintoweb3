# Stellar dApp Best Practices

## Security
- Use environment variables for sensitive data (secret keys, Horizon URLs).
- Never expose secret keys in frontend code.
- Use multisig for important accounts.
- Set proper thresholds and signers for asset issuers.

## Performance
- Minimize on-chain operations; batch transactions when possible.
- Use Horizon API efficiently (pagination, streaming).
- Cache non-sensitive data off-chain.

## Development Workflow
- Use Stellar testnet for development.
- Write comprehensive tests for asset issuance and transfers.
- Keep dependencies up to date.
- Document your code and architecture.

## Resources
- [Stellar Security Best Practices](https://developers.stellar.org/docs/encyclopedia/security/)
- [Stellar JS SDK](https://www.stellar.org/developers/js-stellar-sdk/)