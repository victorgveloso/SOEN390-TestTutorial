import React, { useState } from 'react';
import { TextInput as RNTextInput, Button, View, StyleSheet } from 'react-native';

interface TextInputProps {
    style?: object;
    placeholder?: string;
    placeholderTextColor?: string;
    testID?: string; // Add testID prop
    [key: string]: any;
}

const TextInput: React.FC<TextInputProps>  = ({ style, placeholder, placeholderTextColor, testID, ...rest }) => {
    const [text, setText] = useState('');

    return (
        <View style={[style, styles.container]}>
            <RNTextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={text}
                onChangeText={setText}
                testID={testID} // Pass testID to RNTextInput
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 0,
        height: 60,
    },
    input: {
        height: 40,
        margin: 0,
        borderColor: 'gray',
        color: 'gray',
        padding: 8,
    },
});

export { TextInput };