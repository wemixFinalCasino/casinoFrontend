import Web3 from "web3";
import { useNavigate } from 'react-router-dom';
import "../css/WaitingRoom.css"
import MyWallet from './MyWallet'
import RoomList from './RoomList'
const WaitingRoom = () => {
    return (
        <div>
            <div >
                <div className="nav"><button className="btn">보유카드</button></div>
                <div className="nav"><button className="btn">코인충전</button></div>
                <div className="nav"><MyWallet /></div>
            </div>
            <h1>대기실</h1>
            <RoomList />
        </div>
    )
};

export default WaitingRoom;
