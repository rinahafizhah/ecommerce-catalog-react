import React from "react";
import styled from "styled-components"
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const HeadingText = styled.h1`
  font-family: "Permanent Marker", cursive;
  letter-spacing: 0.3 rem;
  text-transform: uppercase;
`;

const TitleStrong = styled.strong`
  font-family: "Permanent Marker", cursive;
  letter-spacing: 0.3 rem;
  text-transform: uppercase;
  color: var(--mainBlue);
`;
export default function Title({ name, title }) {
  return (
    <div className="row">
      <Heading>
        <HeadingText>{name}</HeadingText>
        <TitleStrong>{title}</TitleStrong>
      </Heading>
    </div>
  );
}
