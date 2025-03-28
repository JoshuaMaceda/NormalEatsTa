import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#000",
    width: "80%",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  signupText: {
    fontSize: 12,
    color: "#444",
  },
  signupLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default styles;
