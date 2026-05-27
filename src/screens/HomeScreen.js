
import { View, Text, FlatList, Pressable } from 'react-native';

const productos = [
  { id: '1', nombre: 'Remera' },
  { id: '2', nombre: 'Zapatillas' },
  { id: '3', nombre: 'Campera' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Productos 🛍️</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Perfil', {
                producto: item.nombre,
              })
            }
          >
            <Text style={{ fontSize: 18, margin: 10 }}>
              {item.nombre}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}