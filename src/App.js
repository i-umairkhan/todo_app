import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
