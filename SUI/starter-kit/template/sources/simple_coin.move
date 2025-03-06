module SimpleCoin::simple_coin {
    use sui::coin::{Self, Coin};
    use sui::tx_context::TxContext;

    struct MyCoin has store, copy, drop {}

    public fun initialize(ctx: &mut TxContext) {
        Coin::register<MyCoin>(ctx);
    }

    public fun mint(ctx: &mut TxContext, recipient: address, amount: u64) {
        // Only the module publisher can mint
        assert!(TxContext::sender(ctx) == @SimpleCoin, 1);
        Coin::mint<MyCoin>(recipient, amount, ctx);
    }
}