import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isOpen}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerTextBold}>Traumatología</Text>
                <Text style={styles.headerText}>Dr. José Pedro Sans</Text>
              </View>
              <Image
                source={require("../assets/icons/bones.png")}
                style={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  right: 10,
                }}
              />
            </View>
            <View style={styles.modalBody}>
              <View style={styles.titleWithIcon}>
                <Image
                  source={require("../assets/icons/user.png")}
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.titleText}>Jorge Avendaño Pérez</Text>
                  <Text style={styles.titleText}>35 años</Text>
                </View>
              </View>
              <View style={styles.clientSpecs}>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Ficha médica:</Text>
                  <Text style={styles.specContent}>77884</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Diagnóstico:</Text>
                  <Text style={styles.specContent}>Calcificación Talón</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Intervención:</Text>
                  <Text style={styles.specContent}>Extirpación en talón</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>
                    Evaluación preanestésica:
                  </Text>
                  <Text style={styles.specContent}>Sí</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Tiempo de solicitud:</Text>
                  <Text style={styles.specContent}>3 días</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Suspensiones:</Text>
                  <Text style={styles.specContent}>2</Text>
                </View>
              </View>
              <View style={styles.iconRow}></View>
              <View style={styles.selectorRow}>
                <Text>Tipo de urgencia:</Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    // padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  modalHeader: {
    flexDirection: "row",
    backgroundColor: "#154FBF",
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
  },
  headerTextContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  headerTextBold: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  modalBody: {
    padding: 20,
    flexDirection: "column",
  },
  titleWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  titleText: {
    fontSize: 18,
  },
  clientSpecs: {
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  selectorRow: {
    width: "100%",
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 150,
  },
  closeButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  specRow: {
    flexDirection: "row",
    marginVertical: 2,
  },
  specLabel: {
    color: "blue",
    marginRight: 5,
  },
  specContent: {
    color: "black",
  },
});

export default CustomModal;
