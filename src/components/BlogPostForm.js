import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { defaultProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const BlogPostForm = ({
    initialValues,
    onSave
}) => {
    const [blogTitle, setBlogTitle] = useState(initialValues.title);
    const [blogContent, setBlogContent] = useState(initialValues.content);

    return(
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Enter Title:</Text>
            <TextInput
                value={blogTitle}
                onChangeText={(newText) => setBlogTitle(newText)}
                style={styles.inputBox}
            />
            <Text style={styles.inputTitle}>Enter Content:</Text>
            <TextInput
                value={blogContent}
                onChangeText={(newText) => setBlogContent(newText)}
                style={styles.inputBox}
                multiline
            />
            <TouchableOpacity onPress={() => onSave(blogTitle,blogContent)}>
                <Text style={styles.saveBtn}>Save</Text>
            </TouchableOpacity>
            
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm;