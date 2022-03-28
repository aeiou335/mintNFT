
export default function GrapeMan() {
    return (
        <div>
            <h2>Grape Man:</h2>
            <h4>The world's saddest grape man</h4>
            <h4>Author: San Jose Danny</h4>
            <Divider />
            <div style={{ margin: 8 }}>
                <div>
                    <Image src="./grape_man.png" width={400} height={300}/>
                </div>
                <Button
                    style={{ marginTop: 8 }}
                    onClick={async () => {
                    /* look how you call setPurpose on your contract: */
                    /* notice how you pass a call back for tx updates too */
                    const result = tx(writeContracts.YourContract.setPurpose(newPurpose), update => {
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
                ></Button>
            </div>
        </div>
    )
}