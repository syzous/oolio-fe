import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const Store = React.lazy(() => import("./pages/Store"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </Suspense>
  );
}

export default App;
