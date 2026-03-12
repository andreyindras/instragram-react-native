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
        marginTop: 4
    },

    txtDataPost: {
        fontWeight: 100,
        fontSize: 8
    }
})