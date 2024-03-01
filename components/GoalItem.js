import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ item, deleteText }) {
  return (
    <View style={styles.goalItem} key={item.key}>
      <Pressable
        onPress={deleteText.bind(this, item.key)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
