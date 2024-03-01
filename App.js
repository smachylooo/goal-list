import React, { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalInput, setModalInput] = useState(false);
  const [someData, setSomeData] = useState([]);

  const startAddGoal = () => {
    setModalInput(true);
  };

  const endAddGoal = (setText) => {
    setModalInput(false);
    setText("");
  };

  const addText = (textInput) => {
    setSomeData((prevData) => [
      ...prevData,
      { text: textInput, key: Math.random().toString() },
    ]);
    setModalInput(false);
  };

  const deleteText = (id) => {
    setSomeData((curr) => {
      return curr.filter((goal) => goal.key !== id); // Corrected to compare with 'key'
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoal} />
        <GoalInput
          addText={addText}
          visibly={modalInput}
          endAddGoal={endAddGoal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={someData}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteText={deleteText} />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
