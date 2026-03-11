import { Image, StyleSheet, Text, View } from "react-native";

export default function InfoUsuario({imagem, usuario}) {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.imgUsuario}></Image>
            <Text style={styles.txtUsuario}>{usuario}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    
    imgUsuario: {
        width: 35,
        height: 35,
        borderRadius: 20,
        marginRight: 8
    },
    
    txtUsuario: {
        fontWeight: "600"
    }
})