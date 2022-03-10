import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle !== "") {
      setCourseGoals([
        ...courseGoals,
        { uid: Math.random().toString(), value: goalTitle },
      ]);
    } else {
      alert("You must add a value");
    }
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
          id={itemData.item.uid}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
