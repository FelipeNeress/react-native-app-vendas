import { SafeAreaView, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

import Teste from "./Teste";

const TextNew = styled.Text`
  color: blue;
  font-size: 24px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Teste text="ABC">Texxxtando vc</Teste>
      <Teste text="Felipe" />
      <Teste text="Gabriel" />
      <Text style={styles.container}>hello world</Text>
      <TextNew>Hello world</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "orange",
  },
});

export default App;
