import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


const TA2Screen = () => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingresar texto..."
                onChangeText={setText}
                value={text}
            />
            <Text style={styles.text}>Texto: {text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
    },
}); 




export default TA2Screen;