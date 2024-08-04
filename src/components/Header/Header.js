import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background: var(--primary-color);

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <h1>Note App</h1>
    </StyledHeader>
  );
}
