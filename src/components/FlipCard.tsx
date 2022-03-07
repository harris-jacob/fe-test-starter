import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Card from "./generic/Card";
import styled from "styled-components";

interface Props {
  front: React.ReactNode;
  back: React.ReactNode;
}

const CardPiece = styled(Card)`
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  position: absolute;
`;

const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 380px;
`;

/** Flip card HOC that manages its own state */
export const FlipCard = ({ front, back }: Props): JSX.Element => {
  const [flipped, setFlipped] = useState(false);
  const AnimatedCard = animated(CardPiece);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY( ${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <CardContainer onClick={() => setFlipped((s) => !s)}>
      <AnimatedCard style={{ transform, opacity: opacity.to((o) => 1 - o) }}>
        {front}
      </AnimatedCard>
      <AnimatedCard style={{ transform, opacity, rotateY: "180deg" }}>
        {back}
      </AnimatedCard>
    </CardContainer>
  );
};
