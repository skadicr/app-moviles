
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Ir a Perfil con datos"
        onPress={() =>
          navigation.navigate('Perfil', {
            nombre: 'Juan',
            edad: 25,
          })
        }
      />
    </View>
  );
}