import React from 'react';
import styled from 'styled-components';

// https://www.w3schools.com/howto/howto_css_flip_card.asp

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

const Card = () => (
  <CardContainer>
    <CardContent className="card-content">
      <div className="flip-card-front">
        <h1>
cool
        </h1>
      </div>

      <div className="flip-card-back">
        <h1>
John Doe
        </h1>
        <p>
Architect & Engineer
        </p>
        <p>
We love that guy
        </p>
      </div>
    </CardContent>
  </CardContainer>
);

export default Card;
