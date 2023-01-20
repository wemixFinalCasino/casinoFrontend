import { useState, useEffect } from "react";
import Web3 from "web3";
import axios from "axios";

const MyWallet = () => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [token, setToken] = useState(0);
    const getAccount = async () => {
        return await window.ethereum.request({ method: 'eth_requestAccounts' });
    } 
    const getBalance = async (accounts) => {
        return await window.ethereum.request({ method: 'eth_getBalance' , params: [ accounts, 'latest'] })
    }
    useEffect(() => {
        getAccount().then((accounts)=>{ 
            setAccount(accounts)
        });
    }, []);
    useEffect(() => {
        if(account !== ""){
            axios.post('https://explorerapi.test.wemix.com/v1/accounts/balance',
            {
                addresses: account
            },{
                headers : {
                    "api-key" : "1ba5e446edf1997f67b51bf9e60b3fbba6fa1bf84301115292805d7e24f43539",
                    "Content-Type": "application/json"
                }    
            })
            .then(function (response) {
                const wemix = response.data.results.data[0].balance
                setBalance(wemix / Math.pow(10,18))
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }, [account]);
    // getBalance(accounts).then((balance)=>{
    //     console.log(balance);
    //     // const wemix = parseInt(balance, 16)
    //     // setBalance(wemix)    
    // })
    return (
        <>
        <h5>{account}<br></br>{balance} WIMIX</h5><br>{token} TOKEN</br>
        </>
    )
};

export default MyWallet;
