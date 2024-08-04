import styled from "styled-components";
import { Note } from "../Note/Note";

const StyledNoteArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0px 0px;
  margin-bottom: 10%;
  flex-wrap: wrap;
  gap: 20px;
`;

export function NoteArea({ notes, onDelete }) {
  return (
    <StyledNoteArea>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
          />
        );
      })}
    </StyledNoteArea>
  );
}
