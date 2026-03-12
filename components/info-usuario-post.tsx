import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default function InfoUsuario({imagem, usuario}) {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.imgUsuario}></Image>
            <Text style={styles.txtUsuario}>{usuario}</Text>
            <View style={styles.iconTresPontinhos}>
                <Icon name="more-vertical" style={styles.iconImg}></Icon>
            </View>
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
        width: 32,
        height: 32,
        borderRadius: 20,
        marginRight: 8
    },
    
    txtUsuario: {
        fontWeight: "600",
        fontSize: 14
    },

    iconTresPontinhos: {
        marginLeft: "auto"
    },

    iconImg: {
        fontSize: 18  
    }
})