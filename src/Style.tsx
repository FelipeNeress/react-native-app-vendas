import { useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components";

const TextNew = styled.Text`
  font-size: 24px;
  color: #ca1212;
`;

const list: string[] = [
  "text1",
  "text2",
  "text3",
  "text4",
  "text5",
  "text6",
  "text1",
  "text2",
  "text3",
  "text4",
  "text5",
  "text6",
];

const StyleAPP = () => {
  const [value, setValue] = useState<string>("");

  const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };

  const handleOnClick = () => {
    console.log("passou o click");
  };

  return (
    <SafeAreaView style={styles.margens_lf}>
      <TouchableOpacity onPress={handleOnClick} style={styles.touchable}>
        <Text>CLICAR</Text>
      </TouchableOpacity>

      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
      </ScrollView>

      <FlatList
        horizontal
        style={styles.flat}
        data={list}
        renderItem={({ item }) => <Text style={styles.container}>{item}</Text>}
      />

      <View style={styles.View1}>
        <View style={styles.View2}>
          <Text style={styles.text}>Novo Teste</Text>
        </View>
        <View style={styles.View2}>
          <Text>Novo Teste</Text>
        </View>
      </View>
      <Text style={styles.container}>Testando</Text>
      <TextNew>NOVO TESTE</TextNew>
      <TextInput onChange={handleOnChangeInput} value={value} style={styles.input} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "blue",
    fontSize: 30,
  },
  text: {
    fontSize: 30,
    color: "red",
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
  margens_lf: {
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#ddd",
    margin: 16,
  },
  scroll: {
    backgroundColor: "green",
    height: 100,
    // flexDirection: 'row' //achei meio opcional
  },
  flat: {
    backgroundColor: "#ddd",
  },
  touchable: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 4,
    margin: 16,
  },
});

export default StyleAPP;
