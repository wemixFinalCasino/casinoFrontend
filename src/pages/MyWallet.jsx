import { useState } from "react";
import Web3 from "web3";

const MyWallet = () => {
    const accounts = async () => {
        return await window.ethereum.request({ method: 'eth_requestAccounts' });
    } 
    accounts().then((data)=>{
        setAccount((prev) => prev = data)
    });
    const [account, setAccount] = useState(0);
    const [balance, setBalance] = useState(0);
    return (
        <>
        <h5>{account}<br></br>{balance} WIMIX</h5>
        </>
    )
};

export default MyWallet;
