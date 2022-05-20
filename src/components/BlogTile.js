import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { withNavigation } from "react-navigation";

const BlogTile = ({ title, id, navigation }) => {
  const { removeBlogPost } = useContext(Context);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Show", { id })}
    >
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => removeBlogPost(id)}
      >
        <Feather style={styles.icon} name="trash" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 5,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    fontSize: 30,
    marginRight: 5,
    alignSelf: "flex-end",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withNavigation(BlogTile);
