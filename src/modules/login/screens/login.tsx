import { View } from "react-native";

import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input placeholder="Usuario" />
        <Button margin="8px" title="ENTRAR" />
      </ContainerLogin>
    </View>
  );
};

export default Login;