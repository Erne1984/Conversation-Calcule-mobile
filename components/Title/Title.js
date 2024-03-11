import { StyleSheet, Text, View } from 'react-native';

const Title = (props) => {
    return(
        <View>
            <Text style={titleStyles.title}>
                {props.content}
            </Text>
        </View>
    )
}

const titleStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        color: "purple",
        fontWeight: "bold"
    }
})

export default Title;