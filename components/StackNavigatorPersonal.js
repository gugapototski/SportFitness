import { createStackNavigator } from "@react-navigation/stack";
import Treinos from "../Telas/treinoPersonal";
import TreinoDiaAluno from "../Telas/treinodiaPersonal";

const Stack = createStackNavigator();

function TreinosStackPersonal() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Treinos"
        component={Treinos}
        options={{ headerShown: false }} // Isso ocultará o cabeçalho
      />
      <Stack.Screen
        name="TreinoDiaAluno"
        component={TreinoDiaAluno}
        options={{ headerShown: false }} // Isso também ocultará o cabeçalho
      />
    </Stack.Navigator>
  );
}

export default TreinosStackPersonal;
