import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const TextNew = styled.Text`
  font-size: 24px;
  color: #ca1212;
`;

const StyleAPP = () => {
  return (
    <SafeAreaView>
      <View style={styles.View1}>
        <View style={styles.View2}>
          <Text>Novo Teste</Text>
        </View>
        <View style={styles.View2}>
          <Text>Novo Teste</Text>
        </View>
        <View style={styles.View2}>
          <Text>Novo Teste</Text>
        </View>
        <View style={styles.View2}>
          <Text>Novo Teste</Text>
        </View>
      </View>
      <Text style={styles.container}>Testando</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "blue",
  },
  View1: {
    // display: 'flex', já vem como padrão
    backgroundColor: "blue",
    padding: 24,
    flexDirection: "row",
  },
  View2: {
    backgroundColor: "pink",
  },
});

export default StyleAPP;
