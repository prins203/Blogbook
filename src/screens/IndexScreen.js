import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BlogTile from "../components/BlogTile";
import {Context} from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    const { state, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        
        //return  will only be triggered when this component is removed from stack destroyed
        return () => {
            listener.remove();
        }
    }, [])

    return(
        <>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({item}) => {
                    return <BlogTile 
                        title={item.title} 
                        id={item.id} 
                    />
                }}/>
        </>
    );
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" style={styles.headerRight}></Feather>
                </TouchableOpacity>
            );
        }
    }
};

const styles = StyleSheet.create({
    headerRight: {
        fontSize: 30,
        marginRight: 10
    }
});

export default IndexScreen;