import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PerfilScreen = () => {
  // Substitua 'require' pelo caminho correto da sua imagem local
  const profileImage = require("../Imagens/perfilBranco.png");

  return (
    <View style={styles.container}>
      <View style={styles.containerImghorizontal}>
        <Image
          source={require("../Imagens/quadradoVerde.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.containerImgdiagonal}>
        <Image
          source={require("../Imagens/quadradoVerde.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.containerPrincipal}>
        <View style={styles.containerIMG}>
          <Image source={profileImage} style={styles.profileImage} />
        </View>
        <View style={styles.containernomeGrande}>
          <Text style={styles.Textnome}>Irineu da Silva</Text>
        </View>
        <View style={styles.conteinerWhiteSquare}>
          <View style={styles.whiteSquare1}>
            <View style={styles.containerTextLeft}>
              <Text style={styles.TextGrande}> 15%</Text>
              <Text style={styles.SubText}>
                Treinos realizados{"\n"}(Sessões)
              </Text>
            </View>
            <View style={styles.containerTextRight}>
              <Text style={styles.TextGrande}> 5</Text>
              <Text style={styles.SubText}>
                Avaliações físicas{"\n"}(Realizadas)
              </Text>
            </View>
          </View>

          <View style={styles.whiteSquare2}>
            <Image
              source={require("../Imagens/perfilPequeno.png")}
              style={styles.ImgPerfilPequeno}
            />
            <Image
              source={require("../Imagens/Edit.png")}
              style={styles.ImgEdit}
            />
            <Text style={styles.titleContainer}>Dados Cadastrais</Text>

            <View style={styles.containerTexInfo}>
              <Text style={styles.textInfo}>Celular</Text>
              <Text style={styles.textInfo}>Endereço</Text>
              <Text style={styles.textInfo}>Bairro</Text>
              <Text style={styles.textInfo}>CEP</Text>
              <Text style={styles.textInfo}>Cidade</Text>
              <Text style={styles.textInfo}>Estado</Text>
              <Text style={styles.textInfo}>Numero</Text>

              <View style={styles.containerTextSecundario}>
                <Text style={styles.TextSecundario}>(46) 99999-0000</Text>
                <Text style={styles.TextSecundario}>Rua Norte</Text>
                <Text style={styles.TextSecundario}>Centro</Text>
                <Text style={styles.TextSecundario}>(46) 85600-000</Text>
                <Text style={styles.TextSecundario}>(46) Dois Vizinhos</Text>
                <Text style={styles.TextSecundario}>(46) PR</Text>
                <Text style={styles.TextSecundario}>(46) 1485</Text>
              </View>
            </View>
          </View>

          <View style={styles.whiteSquare3}>
            <Image
              source={require("../Imagens/perfilPequeno.png")}
              style={styles.ImgPerfilPequeno}
            />
            <Image
              source={require("../Imagens/Edit.png")}
              style={styles.ImgEdit}
            />
            <Text style={styles.titleContainer}>Dados Cadastrais</Text>

            <View style={styles.containerTexInfo}>
              <Text style={styles.textInfo}>Nascimento</Text>
              <Text style={styles.textInfo}>CPF</Text>
              <Text style={styles.textInfo}>Altura</Text>
              <Text style={styles.textInfo}>Peso</Text>

              <View style={styles.containerTextSecundario2}>
                <Text style={styles.TextSecundario}>(46) 99999-0000</Text>
                <Text style={styles.TextSecundario}>Rua Norte</Text>
                <Text style={styles.TextSecundario}>Centro</Text>
                <Text style={styles.TextSecundario}>(46) 85600-000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center", // Alinha os filhos do container no centro verticalmente
    alignItems: "center", // Alinha os filhos do container no centro horizontalmente
  },
  containerImghorizontal: {
    position: "absolute",
    top: -150,
    zIndex: 1,
  },
  containernomeGrande: {
    top: 180,
  },
  Textnome: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    color: "white",
  },
  containerImgdiagonal: {
    position: "absolute",
    zIndex: 2,
    top: "70%",
    left: 20,
    transform: [{ rotate: "140deg" }],
  },
  containerPrincipal: {
    zIndex: 4,
    top: 40,
    alignItems: "center",
  },
  containerIMG: {
    position: "absolute",
    top: "5%",
  },
  conteinerWhiteSquare: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  whiteSquare1: {
    position: "absolute",
    zIndex: 10,
    top: "28%",
    width: "90%",
    height: "10%",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  whiteSquare2: {
    position: "absolute",
    top: "41%",
    width: "90%",
    height: "24%",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  whiteSquare3: {
    position: "absolute",
    top: "68%",
    width: "90%",
    height: "17%",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  containerTextLeft: {
    position: "absolute",
    left: "4%",
    width: "40%",
  },
  containerTextRight: {
    position: "absolute",
    right: "4%",
    width: "40%",
  },
  containerTexInfo: {
    top: 20,
    left: 8,
  },
  TextGrande: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    top: "20%",
    textAlign: "center",
    padding: 3,
  },
  SubText: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    top: 10,
    textAlign: "center",
  },
  ImgPerfilPequeno: {
    position: "absolute",
    height: 35,
    width: 35,
    left: 10,
    top: 3,
  },
  ImgEdit: {
    position: "absolute",
    right: 6,
    top: 4,
  },
  titleContainer: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    left: 60,
    top: 9,
  },
  textInfo: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    margin: 3,
  },
  containerTextSecundario: {
    left: 90,
    top: -165,
  },
  TextSecundario: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    margin: 3,
    opacity: 0.5,
  },
  containerTextSecundario2: {
    left: 90,
    top: -93,
  },
});
("");

export default PerfilScreen;
