import React, {useState} from "react";
import { View, Text, TextInput, FlatList, Button, StyleSheet } from "react-native";


const TA3Screen = () => {
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

    return (
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
                    <View style={styles.itemContainer}>
                        <Text>{item}</Text>
                        <Button title="Eliminar" onPress={() => eliminarTarea(index)} />
                    </View>
                )}
            />
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
        marginTop: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 10,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 10,
    },
});

export default TA3Screen;