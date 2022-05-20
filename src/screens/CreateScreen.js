import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    const handleSavePost = (blogTitle,blogContent) => {
        addBlogPost(blogTitle,blogContent, () => {
            navigation.navigate('Index')
        });
    }

    return (
        <BlogPostForm
            onSave={(blogTitle,blogContent) => handleSavePost(blogTitle,blogContent)}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginHorizontal: 5
    },
    inputTitle: {
        fontSize: 30,
    },
    inputBox: {
        borderColor: '#000000',
        borderWidth: 3,
        fontSize: 20,
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 20
    },
    saveBtn: {
        fontSize: 25,
        alignSelf: 'center',
        borderColor: '#000000',
        borderWidth: 2,
        paddingHorizontal: 40,
        paddingVertical: 5,
        marginTop: 30
    }
});

export default CreateScreen;