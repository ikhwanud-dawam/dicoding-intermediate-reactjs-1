import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { getActiveNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";

function NotesWrapper() {
  return <Notes />;
}

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="Tambah">
              <FaPlus />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default NotesWrapper;
