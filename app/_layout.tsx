import { ScrollView, StyleSheet } from "react-native";
import InfoUsuario from "../components/info-usuario-post";
import ImagemPost from "../components/imagem-post";

export default function RootLayout() {
 
  return (
    <ScrollView style={styles.container}>
      <InfoUsuario imagem={require("../assets/images/img-luis-suarez.jpg")} usuario={"LuisitoPistoleiro1903"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/img-luis-suarez.jpg")}></ImagemPost>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  }
})