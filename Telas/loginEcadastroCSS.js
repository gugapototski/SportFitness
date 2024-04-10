import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 8,
    margin: 20,
  },
  greenText: {
    fontSize: 40,
    fontFamily: "Montserrat-SemiBold",
    color: "#3EA519",
  },
  whiteText: {
    fontSize: 40,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
  },
  logoImage: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerLogin: {
    top: 90,
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 8,
  },
  headerCadastro: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCadastroWhite: {
    fontSize: 11,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
    margin: 4,
  },
  textCadastroGreen: {
    fontSize: 11,
    fontFamily: "Montserrat-SemiBold",
    color: "#3EA519",
    marginLeft: 0,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    fontFamily: "Montserrat-SemiBold",
  },
});

export default styles;
