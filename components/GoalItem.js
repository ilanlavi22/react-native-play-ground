import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function GoalItem({ goals, setGoals }) {
  const filteredItems = (id) => {
    newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };

  return (
    <FlatList
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      data={goals}
      keyExtractor={(goal) => goal.id}
      renderItem={(itemData) => {
        const { name, id } = itemData.item;
        return (
          <View style={styles.goalsList}>
            <Pressable
              onPress={() => filteredItems(id)}
              // android_ripple={styles.pressedItem}
              style={({ pressed }) => pressed && styles.itemPressed}
            >
              <View style={styles.goalText}>
                <Text style={styles.goalName}>{name}</Text>
                <AntDesign style={styles.goalIcon} name='delete' />
              </View>
            </Pressable>
          </View>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  goalsList: {
    backgroundColor: '#14b8a6',
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
    lineHeight: 24,
    fontVariant: ['small-caps'],
  },
  goalText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  goalName: {
    color: 'white',
    fontSize: 17,
  },
  goalIcon: {
    fontSize: 18,
    color: 'white',
    marginLeft: 'auto',
  },
  itemPressed: {
    backgroundColor: '#115e59',
  },
});
