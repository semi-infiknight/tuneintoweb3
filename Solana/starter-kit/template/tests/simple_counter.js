const anchor = require("@coral-xyz/anchor");
const assert = require("assert");

describe("simple-counter", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.SimpleCounter;

  it("Initializes and increments the counter", async () => {
    const counter = anchor.web3.Keypair.generate();
    await program.methods.initialize().accounts({
      counter: counter.publicKey,
      user: program.provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    }).signers([counter]).rpc();

    await program.methods.increment().accounts({
      counter: counter.publicKey,
    }).rpc();

    const account = await program.account.counter.fetch(counter.publicKey);
    assert.strictEqual(account.count.toNumber(), 1);
  });
});