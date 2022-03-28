import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://testnets.opensea.io/collection/room-205" target="_blank" rel="noopener noreferrer">
      {/* <PageHeader
        title="Drop Out for Crypto"
        subTitle="A guy that cannot finish his master thesis."
        style={{ cursor: "pointer" }}
      /> */}
      <PageHeader
        title="Room 205"
        subTitle="The good old days."
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
