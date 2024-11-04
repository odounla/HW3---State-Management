import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Blog Title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Write your content here..."
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit(title, content)}
      >
        <Text style={styles.buttonText}>Save Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  contentInput: {
    height: 100,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 18,
    color: "#555",
    marginBottom: 6,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3A82F6", // A nice blue color
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

export default BlogPostForm;
