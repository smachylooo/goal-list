import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";

export default function GoalInput({ addText, visibly, endAddGoal }) {
  const [textInput, setTextInput] = useState("");

  const handleAddText = () => {
    if (textInput) {
      addText(textInput);
      setTextInput("");
    }
  };

  return (
    <Modal visible={visibly} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/target-icon.png")}
        />
        <TextInput
          style={styles.inputText}
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Your course goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handleAddText} title="Add goal" color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => endAddGoal(setTextInput)}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
