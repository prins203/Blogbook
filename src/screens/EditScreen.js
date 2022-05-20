import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context);
    const id = navigation.getParam('id');
    
    const blogPost = state.find((blog) => {
        return blog.id === id
    })

    const handleSavePost = (blogTitle,blogContent) => {
        editBlogPost(id,blogTitle,blogContent, () => {
            navigation.pop()
        });
    }

    return (
        <BlogPostForm
            initialValues={{
                title:blogPost.title, content: blogPost.content
            }}
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

export default EditScreen;