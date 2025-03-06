require('dotenv').config();
const StellarSdk = require('stellar-sdk');

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const issuingSecret = process.env.ISSUING_SECRET;
const receivingSecret = process.env.RECEIVING_SECRET;
const assetCode = process.env.ASSET_CODE || 'MYTOKEN';

(async () => {
  const issuingKeypair = StellarSdk.Keypair.fromSecret(issuingSecret);
  const receivingKeypair = StellarSdk.Keypair.fromSecret(receivingSecret);
  const asset = new StellarSdk.Asset(assetCode, issuingKeypair.publicKey());

  // Trustline
  const account = await server.loadAccount(receivingKeypair.publicKey());
  const trustTx = new StellarSdk.TransactionBuilder(account, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: StellarSdk.Networks.TESTNET,
  })
    .addOperation(StellarSdk.Operation.changeTrust({ asset }))
    .setTimeout(100)
    .build();
  trustTx.sign(receivingKeypair);
  await server.submitTransaction(trustTx);

  // Issue asset
  const issuingAccount = await server.loadAccount(issuingKeypair.publicKey());
  const paymentTx = new StellarSdk.TransactionBuilder(issuingAccount, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: StellarSdk.Networks.TESTNET,
  })
    .addOperation(StellarSdk.Operation.payment({
      destination: receivingKeypair.publicKey(),
      asset,
      amount: '1000',
    }))
    .setTimeout(100)
    .build();
  paymentTx.sign(issuingKeypair);
  await server.submitTransaction(paymentTx);

  console.log(`Issued 1000 ${assetCode} to ${receivingKeypair.publicKey()}`);
})();