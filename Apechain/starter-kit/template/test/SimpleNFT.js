const { expect } = require("chai");

describe("SimpleNFT", function () {
  it("Should mint NFTs and assign them to the correct owner", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const SimpleNFT = await ethers.getContractFactory("SimpleNFT");
    const nft = await SimpleNFT.deploy();
    await nft.deployed();
    await nft.mint(addr1.address);
    expect(await nft.ownerOf(0)).to.equal(addr1.address);
  });
});