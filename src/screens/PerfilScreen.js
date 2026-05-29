
import { View, Text, Button } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View>
      <Text>Pantalla Perfil</Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}