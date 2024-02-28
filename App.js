import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet,} from 'react-native';

const App = () => {
  const [value, setvalue] = useState('');
  const [goal, setgoal] = useState([]);

  const add = () => { 
    const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    const newGoal = {
      id: goal.length.toString(),
      text: value,
      backgroundColor,
    };

    setgoal([...goal, newGoal]);
  };

  const renderGoal = ({ item }) => (
    <View style={[styles.goalItem, { backgroundColor: item.backgroundColor }]}>
      <Text style={{color: '#ffffff'}}>● {item.text}</Text>
    </View>
  );

  return (
    <View style={styles.div}>
      <View style = {styles.div2}>
        <TextInput
          style={styles.input}
          placeholder="Add a goal"
          value={value}
          onChangeText={setvalue}
        />
        <TouchableOpacity style={{backgroundColor: '#007bff', width: 125, height: 50, borderRadius: 5, alignItems: 'center', marginBottom: 20, marginLeft:15}} onPress={add} title="Enter">
          <Text style = {{fontSize: 19, color: 'white', marginTop: 9, fontWeight: 'bold'}}>Enter</Text>
        </TouchableOpacity>
      </View>

      <View style={{borderTopWidth: 2, marginTop: 15,}}>
        <Text style = {styles.head}>My goals</Text>
      </View>

      <FlatList
        data={goal}
        renderItem={renderGoal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },

  div2: {
    flexDirection: 'row'
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
    height: 50
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10
  },
  goalItem: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default App;
