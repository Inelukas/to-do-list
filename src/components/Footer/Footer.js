import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  place-content: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10vh;
  background: var(--side-color);
  color: white;
`;

export function Footer() {
  return (
    <StyledFooter>
      <h4>Copyright by Lukas Klipp</h4>
    </StyledFooter>
  );
}
