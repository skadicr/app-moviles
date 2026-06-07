
import { View, Text, Button } from 'react-native';

export default function PerfilScreen({ route, navigation }) {
  const { nombre, edad } = route.params || {};

  return (
    <View>
      <Text>Perfil </Text>

      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}