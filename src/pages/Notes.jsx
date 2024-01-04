import React from "react";
import { getAllNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";

function NotesWrapper() {
  return <Notes />;
}

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} />
      </section>
    );
  }
}

export default NotesWrapper;
