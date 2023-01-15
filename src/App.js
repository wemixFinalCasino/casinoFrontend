import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameRoomPage from "./pages/GameRoom";
import Enter from "./pages/Enter";
import WaitingRoom from "./pages/WaitingRoom"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Enter />} />
          <Route path="/gameRoom" element={<GameRoomPage />} />
          <Route path="/waiting-room" element={<WaitingRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
