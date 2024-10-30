import React, {useState} from "react";
import { View, Text, TextInput, Image, Alert, Button, StyleSheet } from "react-native";

// no funciona con el internet de la universidad
const TA7Screen = () => {

    const [title, setTitle] = useState("");
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState("");

    const searchMovie = async () => {
        try {
            //const response = await fetch(`http://www.omdbapi.com/?apikey=b1d1fd99&t=${title}`);
            //const response = await fetch(`http://www.omdbapi.com/?apikey=4a249f8d&t=${title}`);
            const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=b1d1fd99`);
            const data = await response.json();
            if (data.Response === "False") {
                setError('Pelicula no encontada');
                setMovie(null);
            } else {
                setMovie(data);
                setError("");
            }
            setMovie(data);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingresar título de la película..."
                onChangeText={setTitle}
                value={title}
            />
            <View style={styles.buttonContainer}>
                <Button title="Buscar película" onPress={searchMovie} />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {movie && !error && (
                <View style={styles.movieContainer}>
                    <Image source={{uri: movie.Poster}} style={styles.image} />
                    <Text style={styles.Title}>{movie.Title}</Text>
                    <Text style={styles.Plot}>Sinopsis: {movie.Plot}</Text>
                </View>
            )}
            
        </View>
    );
}

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
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 20,
    },
    movieContainer: {
        alignItems: "center",
    },
    error: {
        color: "red",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    Plot: {
        fontSize: 16,
        paddingHorizontal: 20,
    },
});

export default TA7Screen;
