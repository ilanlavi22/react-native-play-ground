import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';

export default function GoalInput({
  enteredGoal,
  setEnteredGoal,
  setGoals,
  setModalVisible,
}) {
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
      setModalVisible(false);
      setEnteredGoal('');
    }
  };
  return (
    <View style={styles.formContainer}>
      <TextInput
        onChangeText={handleInputText}
        value={enteredGoal}
        style={styles.textInput}
        placeholder='Course Goal'
      />
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? styles.buttonPressed : styles.button
          }
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add Goal</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) =>
            pressed ? styles.buttonPressed : styles.button
          }
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#a3a3a3',
  },
  textInput: {
    backgroundColor: '#cccccc',
    borderWidth: 1,
    borderColor: '#fff',
    color: '#555',
    width: '100%',
    padding: 8,
    borderRadius: 4,
    fontSize: 18,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#804580',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonPressed: {
    alignItems: 'center',
    backgroundColor: '#a21caf',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
