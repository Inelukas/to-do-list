import { useState } from "react";
import styled from "styled-components";
import addIcon from "../../assets/add.png";
import { Image } from "../Image/Image";

const StyledInputField = styled.div`
  width: 30vw;
  height: 20vh;
  background: white;
  border-radius: 20px;
  padding: 10px;
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    font-size: 1.2em;
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 5px;
    background: none;
    border: none;
    cursor: pointer;

    :hover {
      transform: scale(1.5);
    }
  }
`;

export function InputField({ onNote }) {
  const [note, setNote] = useState({ title: "", content: "• " });

  function handleInput(event) {
    const { name, value } = event.target;
    setNote((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleNote(event) {
    event.preventDefault();
    onNote(note);
    setNote({ title: "", content: "• " });
  }

  function handleNewLine(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setNote((prevInput) => ({
        ...prevInput,
        content: prevInput.content + "\n• ",
      }));
    }
  }

  return (
    <StyledInputField>
      <StyledForm onSubmit={handleNote}>
        <label htmlFor="title"></label>
        <textarea
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
          required
        />
        <label htmlFor="content"></label>
        <textarea
          onChange={handleInput}
          onKeyDown={handleNewLine}
          name="content"
          rows="4"
          placeholder="Take a note..."
          value={note.content}
          required
        />
        <button type="submit">
          <Image src={addIcon} />
        </button>
      </StyledForm>
    </StyledInputField>
  );
}
