import styled from "styled-components";

const StyledImage = styled.img`
  width: 20px;
`;

export function Image({ src }) {
  return <StyledImage src={src} />;
}
