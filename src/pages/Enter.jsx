import Web3 from "web3";
import { useNavigate } from 'react-router-dom';

const Enter = () => {
    const navigate = useNavigate();

    const changeNetwork = async () => {
        return await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                {
                    chainId: "0x458",
                    chainName: 'Wemix3.0-Testnet',
                    nativeCurrency: {
                    name:"WEMIX",
                    symbol:"WEMIX", 
                    decimals: 18
                    },
                    rpcUrls: ['https://api.test.wemix.com'],
                    blockExplorerUrls: ['https://explorer.test.wemix.com/']
                },
                ],
        });
    }
    const onClick = () => {
        if (typeof window.ethereum !== 'undefined') {
            changeNetwork().then((resolevedData) => {
                navigate('/waiting-room');
            })
            .catch(()=> alert("메타마스크 연결을 해주세요."))
        } else {
            alert('MetaMask is not installed!');
        }    
    }
    return (
    <div>
        <h1>Wellcome to</h1>
        <h1>WiMEX Casino</h1>
        <button onClick={onClick}>입장</button>
    </div>
    )
};

export default Enter;
