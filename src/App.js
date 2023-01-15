import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameRoomPage from "./pages/GameRoom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/gameRoom" element={<GameRoomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
