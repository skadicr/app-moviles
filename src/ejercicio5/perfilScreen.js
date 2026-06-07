
import { View, Text, Button } from 'react-native';

export default function PerfilScreen({ route, navigation }) {
  const { producto } = route.params || {};

  return (
    <View>
      <Text>Detalle del producto </Text>

      <Text style={{ fontSize: 20 }}>
        {producto}
      </Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}