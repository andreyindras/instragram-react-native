import { StyleSheet, Text, View } from "react-native";

export default function LegendaPost({usuario, legenda}) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtUsuario}>{usuario}</Text>
            <Text style={styles.txtLegenda}>{legenda}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 4
    },

    txtUsuario: {
        fontWeight: "600",
        fontSize: 11
    },

    txtLegenda: {
        fontSize: 11,
        marginLeft: 4
    }
})