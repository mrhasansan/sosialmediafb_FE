import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
