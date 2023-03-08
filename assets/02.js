import { useState } from 'react';
import transform from 'css-to-react-native';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInputText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const handleSubmit = () => {
    if (enteredGoal) {
      const newGoal = {
        id: new Date().getTime().toString(),
        name: enteredGoal,
      };
      setGoals((prevGoals) => [...prevGoals, newGoal]);
      //setEnteredGoal('');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.formContainer}>
        <TextInput
          onChangeText={handleInputText}
          value={enteredGoal}
          style={styles.textInput}
          placeholder='Course Goal'
        />
        <Button onPress={handleSubmit} title='Add Goal' />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.title}>Your Goal List</Text>
        <ScrollView
          style={{ paddingVertical: 20 }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          {goals.map((goal) => (
            <Text style={styles.goalsList} key={goal.id}>
              {goal.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#e1e1e1',
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
    fontSize: 18,
  },
  listContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  goalsList: {
    fontSize: 18,
    backgroundColor: 'violet',
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    color: 'black',
    overflow: 'hidden',
    lineHeight: 24,
    fontVariant: ['small-caps'],
  },
});
