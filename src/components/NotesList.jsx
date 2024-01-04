import React from "react";
import NotesItem from "./NotesItem.jsx";

function NotesList({ notes }) {
  if (!notes.length) {
    return <p>No notes found</p>;
  }

  return (
    <section className="notes-list">
      {notes.map((note) => {
        return <NotesItem key={note.id} {...note} />;
      })}
    </section>
  );
}

export default NotesList;
