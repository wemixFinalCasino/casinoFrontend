import WebsocketConn from "../api/WebsocketConn";

function RoomList() {
    console.log('Create websocket connection ...')
    const websocket = new WebsocketConn();
    console.log('Create websocket connection Success!')
    
    const onClick = () => {
        websocket.sendMessage("hi")
    }
    const inputText = "";
    return (
        <div>
            <button onClick={onClick}>send</button>
            <div></div>
        </div>
    )
}

export default RoomList;