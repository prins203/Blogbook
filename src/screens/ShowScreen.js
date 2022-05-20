import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const id = navigation.getParam('id');

    const displayBlogPost = state.find((blogPost) => blogPost.id === id);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{displayBlogPost.title}</Text>
            <Text style={styles.content}>{displayBlogPost.content}</Text>    
        </View>
    );
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {id : navigation.getParam('id')})}>
                    <EvilIcons name="pencil" style={styles.headerRight}></EvilIcons>
                </TouchableOpacity>
            );
        }
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginHorizontal: 5,
        borderColor: '#000000',
        borderWidth: 3
    },
    title: {
        fontSize: 30,
        marginTop: 40,
        marginBottom: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    content: {
        fontSize: 20,
        marginBottom: 40,
        marginHorizontal: 5,
    },
    headerRight: {
        fontSize: 40,
        marginRight: 10
    }
});

export default ShowScreen;