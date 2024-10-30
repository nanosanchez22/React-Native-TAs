import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TA1Screen = () => {

    const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
        <Text style={styles.text}>Contador: {count}</Text>
        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => setCount(count + 1)} />
            <Button title="-" onPress={() => setCount(count - 1)} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
    },
    

});

export default TA1Screen;