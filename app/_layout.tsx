import { ScrollView, StyleSheet } from "react-native";
import InfoUsuario from "../components/info-usuario-post";
import ImagemPost from "../components/imagem-post";
import InteracaoPost from "../components/interacao-post";
import LegendaPost from "../components/legenda-post";
import DataPost from "../components/data-post";

export default function RootLayout() {
 
  return (
    <ScrollView style={styles.container}>
      <InfoUsuario imagem={require("../assets/images/img-luis-suarez.jpg")} usuario={"LuisitoPistoleiro1903"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/img-luis-suarez.jpg")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"703 mil"} qtdComentarios={7.893} qtdRepostagem={"96,2 mil"} qtdEnvios={"53,7 mil"}></InteracaoPost>
      <LegendaPost usuario={"LuisitoPistoleiro1903"} legenda={"El Pistoleiro"}></LegendaPost>
      <DataPost dataPost={"Há 2 dias"}></DataPost>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  }
})