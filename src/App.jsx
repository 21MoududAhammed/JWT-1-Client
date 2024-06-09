import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SIgnIn";
import SignUp from "./components/SignUp";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </div>
  );
}
