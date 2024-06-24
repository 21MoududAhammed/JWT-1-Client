import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SIgnIn";
import SignUp from "./components/SignUp";
import EntryService from "./components/EntryService";
import ServiceDetails from "./components/ServiceDetails";
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/entry-service" element={<EntryService />} />
        <Route element={<PrivateRoute />}>
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
