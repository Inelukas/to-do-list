import styled from "styled-components";
import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";
import confirmIcon from "../../assets/confirm.png";
import cancelIcon from "../../assets/cancel.png";
import { Image } from "../Image/Image";
import { useRef, useState } from "react";

const StyledNote = styled.div`
  width: 20vw;
  height: 20vh;
  background: var(--tertiary-color);
  position: relative;
  border-radius: 20px;
  padding: 10px;
  font-size: 1.2em;
  box-shadow: 3px 3px black;

  button {
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
  }

  .delete-icon {
    right: 5px;
    bottom: 5px;
    opacity: 0.6;
  }

  .edit-icon {
    right: 5px;
    top: 5px;
    opacity: 0.6;
  }

  .confirm-icon {
    transform: scale(0.9);
    right: 5px;
    top: 30px;
  }

  .edit {
    height: 100%;
  }

  .edit-title,
  .edit-content {
    padding: 5px;
    width: 90%;
    resize: none;
    border: none;
    border-radius: 10px;
    background: var(--tertiary-color);
    outline: none;
  }

  .edit-title {
    height: 20%;
  }

  .edit-content {
    height: 80%;
  }

  .delete-icon:hover,
  .edt-icon:hover {
    opacity: 1;
    transform: scale(1.5);
  }

  .to-do-list {
    cursor: pointer;
  }

  .finished {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

export function Note({ title, content, id, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const abortTimer = useRef(null);

  function handleFinished(event) {
    event.target.classList.toggle("finished");
  }

  function toggleEdit() {
    setEditing(!editing);
  }

  function abortEdit() {
    abortTimer.current = setTimeout(() => setEditing(false), 2000);
  }

  function handleEditData(event) {
    event.preventDefault();
    const { title, content } = event.target;
    const newCardContent = {
      id: id,
      title: title.value,
      content: content.value,
    };
    onEdit(newCardContent);
    setEditing(!editing);
  }

  return (
    <StyledNote
      onDoubleClick={toggleEdit}
      onMouseLeave={abortEdit}
      onMouseEnter={() => clearTimeout(abortTimer.current)}
    >
      {!editing ? (
        <>
          <h3>{title}</h3>
          <div>
            {content.split("\n").map((item, index) => {
              return (
                <p
                  className={"to-do-list"}
                  key={index}
                  onClick={handleFinished}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <button
            className={"delete-icon"}
            onClick={() => {
              onDelete(id);
            }}
          >
            <Image alt="Delete Icon" src={deleteIcon} />
          </button>
          <button className={"edit-icon"} onClick={toggleEdit}>
            <Image alt="Edit Icon" src={editIcon} />
          </button>
        </>
      ) : (
        <>
          <form className="edit" onSubmit={handleEditData}>
            <textarea
              name="title"
              className="edit-title"
              defaultValue={title}
            />
            <textarea
              name="content"
              className="edit-content"
              defaultValue={content}
            />
            <button type="submit" className={"confirm-icon"}>
              <Image alt="Confirm Icon" src={confirmIcon} />
            </button>
          </form>
          <button
            type="button"
            className={"delete-icon"}
            onClick={() => {
              onDelete(id);
            }}
          >
            <Image alt="Delete Icon" src={deleteIcon} />
          </button>
          <button type="button" className={"edit-icon"} onClick={toggleEdit}>
            <Image alt="Edit Icon" src={cancelIcon} />
          </button>
        </>
      )}
    </StyledNote>
  );
}
