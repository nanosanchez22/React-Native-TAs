import React, {useState} from "react";
import { View, Text, TextInput, FlatList, Button, StyleSheet } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";


const TA6Screen = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {

        if(tarea){
            setTareas([...tareas, tarea]);
            setTarea("");
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const renderRightActions = (progress, dragX, index) => {
       

        return (
            <View style={styles.rightAction}>
                <Button title="Eliminar" onPress={() => eliminarTarea(index)} color="red"/>
            </View>
        );
    };



    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingresar tarea..."
                onChangeText={setTarea}
                value={tarea}
            />
            <View style={styles.buttonContainer}>
                <Button title="Agregar tarea" onPress={agregarTarea} />
            </View>
            <FlatList
                data={tareas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, index)} >
                        <View style={styles.itemContainer}>
                            <View style={styles.textContainer}>
                                <Text>{item}</Text>
                            </View>
                        </View>
                    </Swipeable>
                )}
            />
        </View>
        </GestureHandlerRootView>
    );

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: "100%",
        marginBottom: 20,

    },
    itemContainer: {
        flexDirection: "row",
        //justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        minHeight: 50,
        //height: 'auto',
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#eee",

    },
    rightAction: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,

    },
    textContainer: {
        flex: 1,
    },
});

export default TA6Screen;