import { createStackNavigator } from "@react-navigation/stack";
import Treinos from "../Telas/treinos";
import TreinoDiaAluno from "../Telas/treinodiaAluno";

const Stack = createStackNavigator();

function TreinosStack() {
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

export default TreinosStack;
