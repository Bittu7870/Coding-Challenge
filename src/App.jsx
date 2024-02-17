import { Toaster } from "react-hot-toast";
import "./App.css";
import Login from "./components/Auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
