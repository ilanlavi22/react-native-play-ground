import { useState } from 'react';
import GoalInput from './components/GoalInput';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  StatusBar,
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar animated={true}></StatusBar>
      <View style={styles.pageContainer}>
        <Modal animationType='slide' visible={modalVisible}>
          <GoalInput
            enteredGoal={enteredGoal}
            setEnteredGoal={setEnteredGoal}
            setGoals={setGoals}
            setModalVisible={setModalVisible}
          />
        </Modal>

        {!modalVisible && (
          <Pressable
            style={styles.modalButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.modalButtonText}>Add New Goal</Text>
          </Pressable>
        )}

        {!modalVisible && (
          <View style={styles.listContainer}>
            <GoalItem
              goals={goals}
              setGoals={setGoals}
              setModalVisible={setModalVisible}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    // backgroundColor: '#e1e1e1',
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
  button: {
    alignItems: 'center',
    backgroundColor: '#804580',
    borderRadius: 4,
    padding: 8,
    maxWidth: '40%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: '#804580',
    alignItems: 'center',
    borderRadius: 4,
    padding: 8,
  },
  modalButtonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
