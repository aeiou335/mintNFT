import { SyncOutlined } from "@ant-design/icons";
import { ethers } from "ethers";
import { Button, Card, DatePicker, Divider, Input, Image, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { Address, Balance, Events } from "../components";
export default function Mint({
  address,
  userSigner,
  tx,
  nftData,
}) {
  //const [newPurpose, setNewPurpose] = useState("loading...");
  const contractAddress = "0x8e792Ef824D720FE1dC0fb897B9b4aa7B187424c"
  const contract = require("../contracts/Room205.json")
  const nftContract = new ethers.Contract(contractAddress, contract.abi, userSigner)
  console.log(address==true)
  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 600, margin: "auto", marginTop: 64 }}>
        <h2>{nftData.title}</h2>
        <h4>{nftData.desc}</h4>
        <h4>Author: {nftData.author}</h4>
        <Divider />
        <div style={{ margin: 8 }}>
          <div>
            <Image src={nftData.src} width={400} height={300}/>
          </div>
          <Button
            style={{ marginTop: 8 }}
            disabled = {!address}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              const result = tx(nftContract.mintNFT(address, nftData.pinata), update => {
                console.log("📡 Transaction Update:", update);
                if (update && (update.status === "confirmed" || update.status === 1)) {
                  console.log(" 🍾 Transaction " + update.hash + " finished!");
                  console.log(
                    " ⛽️ " +
                      update.gasUsed +
                      "/" +
                      (update.gasLimit || update.gas) +
                      " @ " +
                      parseFloat(update.gasPrice) / 1000000000 +
                      " gwei",
                  );
                }
              });
              console.log("awaiting metamask/web3 confirm result...", result);
              console.log(await result);
            }}
          >
            Mint NFT!
          </Button>
        </div>
      </div>
    </div>
  );
}
