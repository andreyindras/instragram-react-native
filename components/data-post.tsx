import { StyleSheet, Text, View } from "react-native";

export default function DataPost({dataPost}) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtDataPost}>{dataPost}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        marginBottom: 14
    },

    txtDataPost: {
        color: "#808080",
        fontSize: 10
    }
})