import { SafeAreaView, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text`
  color: blue;
  font-size: 24px;
`;

const App = () => {
  return (
    <SafeAreaView>
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
