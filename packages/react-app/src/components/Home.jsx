import { SyncOutlined } from "@ant-design/icons";
import { ethers } from "ethers";
import { Button, Card, DatePicker, Divider, Input, Image, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { Address, Balance, Events } from "../components";
export default function Home({
  imageData
}) {
  let images = imageData.map((image, key) => {
      console.log(key)
      return (
        <span style={{margin: 20}} key={image}>
            <Image src={image} width={400} height={300}/>
        </span>
      )
  })
  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 1500, margin: "auto", marginTop: 64 }}>
        <Divider />
        <div style={{ margin: 8 }}>
          {images}
        </div>
      </div>
    </div>
  );
}
