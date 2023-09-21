import { Text, View } from "react-native";

import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";
import Button from "../../../shared/components/button/button";

const Login = () => {
  
  return (
    <View>
      <ContainerLogin>
        <Input placeholder="Usuario"/>
        <Button margin="8px" title="ENTRAR"/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
