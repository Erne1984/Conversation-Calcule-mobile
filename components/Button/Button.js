import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = (props) => {
    return (
        <View style={buttonStyles.buttonContainer}>
            <TouchableOpacity onPress={props.event} style={buttonStyles.button}>
                <Text style={buttonStyles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View>
    )
}

const buttonStyles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
    },
    button: {
        width: 150,
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})



export default Button;