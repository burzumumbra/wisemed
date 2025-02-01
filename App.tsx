import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Modal from "./components/modal";

export default function App() {
  return (
    <View style={styles.container}>
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
