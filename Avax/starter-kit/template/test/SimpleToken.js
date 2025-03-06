const { expect } = require("chai");

describe("SimpleToken", function () {
  it("Should deploy with the correct initial supply", async function () {
    const [owner] = await ethers.getSigners();
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const token = await SimpleToken.deploy(ethers.utils.parseEther("1000"));
    await token.deployed();
    expect(await token.totalSupply()).to.equal(ethers.utils.parseEther("1000"));
    expect(await token.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("1000"));
  });
});