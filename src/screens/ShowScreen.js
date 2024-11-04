import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.editIcon}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={30} color="#3A82F6" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#e0e0e0", // Light gray background for the screen
    padding: 16,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff", // White background for the content area
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  content: {
    fontSize: 18,
    color: "#555",
    lineHeight: 24,
    textAlign: "justify",
  },
  editIcon: {
    marginRight: 16,
  },
});

export default ShowScreen;
