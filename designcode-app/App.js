import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Title>Welcome back,</Title>
      <Name>Meng</Name>
    </Container>
  );
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.View``;
const Name = styled.View``;
