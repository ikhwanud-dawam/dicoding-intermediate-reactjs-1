import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotesWrapper from "./pages/Notes";
import ArchivesWrapper from "./pages/Archives";
import DetailPageWrapper from "./pages/DetailPage";
import AddNotes from "./pages/AddNotes";

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
          <Route path="/archives" element={<ArchivesWrapper />}></Route>
          <Route path="/notes/new" element={<AddNotes/>}></Route>
          <Route path="/notes/:id" element={<DetailPageWrapper />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
