import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={AdminPage} />
          <Route path="/customer" element={CustomerPage} />
          <Route path="/register" element={RegistrationPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
