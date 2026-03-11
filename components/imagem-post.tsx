import { Image, StyleSheet, View } from "react-native";

export default function ImagemPost({imagem}) {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.imgPublicacao}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    imgPublicacao: {
        width: "100%",
        height: 350
    }
})