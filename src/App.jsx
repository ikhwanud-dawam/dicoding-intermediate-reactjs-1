import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotesWrapper from "./pages/Notes";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to={"/"}>Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotesWrapper />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
