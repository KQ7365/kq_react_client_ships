import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Ship } from "./components/shippingships/Ship";
import { NavBar } from "./components/nav/NavBar";
import { HomePage } from "./components/homepage/HomePage";
import { Hauler } from "./components/haulers/Hauler";
import { Dock } from "./components/docks/Dock";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/shippingships" element={<Ship />} />
        <Route path="/haulingships" element={<Hauler />} />
        <Route path="/docks" element={<Dock />} />
      </Route>
    </Routes>
  );
};
