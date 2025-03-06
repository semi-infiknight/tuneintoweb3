module SimpleCoin::SimpleCoin {
    use std::signer;
    use aptos_framework::coin::{Self, Coin};
    use aptos_framework::aptos_coin::AptosCoin;

    struct MyCoin has store, copy, drop {}

    public fun initialize(account: &signer) {
        Coin::register<MyCoin>(account);
    }

    public fun mint(account: &signer, to: address, amount: u64) {
        // Only the module publisher can mint
        assert!(signer::address_of(account) == @SimpleCoin, 1);
        Coin::mint<MyCoin>(to, amount);
    }
}