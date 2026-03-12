import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default function InteracaoPost({qtdCurtidas, qtdComentarios, qtdRepostagem, qtdEnvios}) {
    return (
        <View style={styles.container}>
            <View style={styles.areaInteracao}>  
                <Icon name="heart" style={styles.iconImg}></Icon>
                <Text style={styles.txtQtdInteracao}>{qtdCurtidas}</Text>
            </View>

            <View style={styles.areaInteracao}>  
                <Icon name="message-circle" style={styles.iconImg}></Icon>
                <Text style={styles.txtQtdInteracao}>{qtdComentarios}</Text>
            </View>

            <View style={styles.areaInteracao}>  
                <Icon name="repeat" style={styles.iconImg}></Icon>
                <Text style={styles.txtQtdInteracao}>{qtdRepostagem}</Text>
            </View>

            <View style={styles.areaInteracao}>  
                <Icon name="send" style={styles.iconImg}></Icon>
                <Text style={styles.txtQtdInteracao}>{qtdEnvios}</Text>
            </View>

             <View style={styles.areaSalvar}>  
                <Icon name="bookmark" style={styles.iconImg}></Icon>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 8
    },

    areaInteracao: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16
    },

    areaSalvar: {
        marginLeft: "auto",
    },

    iconImg: {
        fontSize: 20,
        paddingRight: 6
    },

    txtQtdInteracao: {
        fontSize: 12
    }
})