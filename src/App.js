import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameRoomPage from "./pages/GameRoom";
import Enter from "./pages/Enter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Enter />} />
          <Route path="/gameRoom" element={<GameRoomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
