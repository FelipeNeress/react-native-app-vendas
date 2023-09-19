import { Children, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface TesteProps {
  text?: string;
  children?: string;
}

const Teste = (props: TesteProps) => {
  //const Teste = ({ children, text }): TesteProps => { //modo de simplificar tudo que está nesse arquivo
  const children = props.children;
  const text = props.text;

  //Melhor jeito de fazer oq está em cima
  //const { children, text } = props;

  const [newText, setNewText] = useState("");

  // useEffect(() => {
  //     console.log('passou aqui');
  // }, [newText, text, Children]);

  const handleOnPress = () => {
    setNewText("NOVO TEXTO");
    // console.log('passou aqui');
  };

  return (
    <View>
      <Text style={{ color: "red" }}>{props.children}</Text>
      <Text style={{ color: "green" }}>{props.text}</Text>

      <Text style={{ color: "red" }}>{children}</Text>
      <Text style={{ color: "green" }}>{newText || text}</Text>

      <Button onPress={handleOnPress} title="BOTAO" />
    </View>
  );
};

export default Teste;
