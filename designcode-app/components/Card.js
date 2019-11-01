import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={require("../assets/background2.jpg")} />
      <Title>Styled Components</Title>
    </Cover>
  </Container>
);

export default Card;

// Start Styling

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text``;
