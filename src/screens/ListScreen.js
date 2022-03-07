import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 33 },
    { name: 'Friend #2', age: 37 },
    { name: 'Friend #3', age: 39 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 18 },
    { name: 'Friend #6', age: 63 },
    { name: 'Friend #7', age: 54 },
    { name: 'Friend #8', age: 57 },
    { name: 'Friend #9', age: 32 }
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      // element === { item: { name: 'Friend #1'}, index: 0 }
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1
  }
});
export default ListScreen;
