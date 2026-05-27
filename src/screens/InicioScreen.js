
import { View, Text, Button } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <View>
      <Text>Inicio 🏠</Text>

      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Configuracion')}
      />

      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}