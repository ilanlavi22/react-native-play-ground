import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the RN Workshop!</Text>
      </View>

      <StatusBar style='auto' />
      <Image
        style={styles.hero}
        source={{
          uri: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        }}
      />
      <About />
    </View>
  );
}

const About = () => {
  return (
    <View style={styles.child}>
      <Text style={styles.childText}>About</Text>
      <Separator />
      <Button
        title='click me'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#e1e1e1',

    alignItems: 'center',
    // justifyContent: 'center',
  },
  child: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
  },
  childText: {
    fontSize: 20,
  },
  hero: {
    width: '100%',
    height: 200,
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: '#DC143C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  separator: {
    margin: 30,
    borderWidth: 5,
    padding: 30,

    borderBottomWidth: 5,
    borderColor: 'red',
  },
});
