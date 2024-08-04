import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10vh;
  background: var(--side-color);
`;

export function Footer() {
  return <StyledFooter />;
}
