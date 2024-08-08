import styled from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { InputField } from "../InputField/InputField";
import { NoteArea } from "../NoteArea/NoteArea";
import { useState } from "react";
import { uid } from "uid";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export function Body() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [{ ...newNote, id: uid() }, ...prevNotes]);
  }

  function handleDelete(id) {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  }

  function handleEdit(newCardContent) {
    setNotes(
      notes.map((note) =>
        note.id === newCardContent.id ? newCardContent : note
      )
    );
  }

  return (
    <StyledBody>
      <Header />
      <InputField onNote={addNote} />
      <NoteArea notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
      <Footer />
    </StyledBody>
  );
}
