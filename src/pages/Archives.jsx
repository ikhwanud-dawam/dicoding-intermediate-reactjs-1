import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";

class Archives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes(),
    };
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <NotesList notes={this.state.archivedNotes} />
      </section>
    );
  }
}

export default Archives;
