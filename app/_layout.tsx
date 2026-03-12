import { ScrollView, StyleSheet } from "react-native";
import InfoUsuario from "../components/info-usuario-post";
import ImagemPost from "../components/imagem-post";
import InteracaoPost from "../components/interacao-post";
import LegendaPost from "../components/legenda-post";
import DataPost from "../components/data-post";

export default function RootLayout() {
 
  return (
    <ScrollView style={styles.container}>
      <InfoUsuario imagem={require("../assets/images/perfil-luis-suarez.jpg")} usuario={"Luis Suárez"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/post-luis-suarez.jpg")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"703 mil"} qtdComentarios={"7.893"} qtdRepostagem={"96,2 mil"} qtdEnvios={"53,7 mil"}></InteracaoPost>
      <LegendaPost usuario={"Luis Suárez"} legenda={"El Pistoleiro"}></LegendaPost>
      <DataPost dataPost={"Há 2 dias"}></DataPost>

      <InfoUsuario imagem={require("../assets/images/perfil-baitaca.jpg")} usuario={"Baitaca"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/post-baitaca.jpg")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"312 mil"} qtdComentarios={"2.457"} qtdRepostagem={"3,7 mil"} qtdEnvios={"1,7 mil"}></InteracaoPost>
      <LegendaPost usuario={"Baitaca"} legenda={"Matchando ao pé do brazeiro"}></LegendaPost>
      <DataPost dataPost={"Há 5 dias"}></DataPost>

      <InfoUsuario imagem={require("../assets/images/perfil-churrasco.png")} usuario={"Churrasco Campeiro"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/post-costela-fogo-chao.webp")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"159 mil"} qtdComentarios={"1.134"} qtdRepostagem={"897"} qtdEnvios={"1,2 mil"}></InteracaoPost>
      <LegendaPost usuario={"Churrasco Campeiro"} legenda={"Iniciando os trabalhos"}></LegendaPost>
      <DataPost dataPost={"Há 7 dias"}></DataPost>

      <InfoUsuario imagem={require("../assets/images/perfil-gremio.jpg")} usuario={"Grêmio"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/post-gremio-mundial.webp")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"1,8 mi"} qtdComentarios={"32.4 mil"} qtdRepostagem={"18,7 mil"} qtdEnvios={"9,3 mil"}></InteracaoPost>
      <LegendaPost usuario={"Grêmio"} legenda={"Grêmio contra Real Madri de Cristiano Ronaldo #tbt"}></LegendaPost>
      <DataPost dataPost={"Há 14 dias"}></DataPost>

      <InfoUsuario imagem={require("../assets/images/perfil-cavalo.png")} usuario={"Tropilha Gaúcha"}></InfoUsuario>
      <ImagemPost imagem={require("../assets/images/post-cavalo.jpg")}></ImagemPost>
      <InteracaoPost qtdCurtidas={"281 mil"} qtdComentarios={"2.493"} qtdRepostagem={"1.642"} qtdEnvios={"763"}></InteracaoPost>
      <LegendaPost usuario={"Tropilha Gaúcha"} legenda={"Direto do pampa gaúcho"}></LegendaPost>
      <DataPost dataPost={"Há 15 dias"}></DataPost>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  }
})