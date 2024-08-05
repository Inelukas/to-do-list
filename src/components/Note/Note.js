import styled from "styled-components";
import deleteIcon from "../../assets/delete.png";
import { Image } from "../Image/Image";

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
    right: 5px;
    bottom: 5px;
    border: none;
    background: none;
    opacity: 0.6;
    cursor: pointer;
  }

  .delete-icon:hover {
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

export function Note({ title, content, id, onDelete }) {
  function handleFinished(event) {
    event.target.classList.toggle("finished");
  }

  return (
    <StyledNote>
      <div>{title}</div>
      <div>
        {content.split("\n").map((item, index) => {
          return (
            <p className={"to-do-list"} key={index} onClick={handleFinished}>
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
    </StyledNote>
  );
}
