import React from 'react';
import styled, { css } from 'styled-components';

// this should be exactly what I'm looking for: https://jsfiddle.net/pf4aemn7/

const CardContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;

  &:hover .card-content {
    transform: rotateY(180deg);
  }
`;

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const cardCSS = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FrontCard = styled.div`
  ${cardCSS};
  background-color: #bbb;
  color: black;
`;

const BackCard = styled.div`
  ${cardCSS};
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`;

const Card = () => (
  <CardContainer>
    <CardContent className="card-content">
      <FrontCard>
        <h1>
cool
        </h1>
      </FrontCard>

      <BackCard>
        <h1>
John Doe
        </h1>
        <p>
Architect & Engineer
        </p>
        <p>
We love that guy
        </p>
      </BackCard>
    </CardContent>
  </CardContainer>
);

export default Card;
