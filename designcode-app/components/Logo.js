import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: white;
  height: 60px;
  padding: 12px 16px 12px; /* top, right+left, bottom */
  margin: 0 8px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
