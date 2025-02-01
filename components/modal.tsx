import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  // select
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(
      "https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedOptions = data.emergencyKinds.map((kind) => ({
          label: kind.name,
          value: kind.id,
        }));
        setOptions(formattedOptions);
      })
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

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
        <TouchableOpacity onPress={toggleModal} style={styles.modalOverlay}>
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
              <View style={styles.iconRow}>
                <Image
                  source={require("../assets/icons/heart.png")}
                  style={styles.icon}
                />
                <Image
                  source={require("../assets/icons/blood.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.selectorRow}>
                <Text
                  style={[
                    styles.titleWithIcon,
                    {
                      alignSelf: "flex-start",
                      color: "#154FBF",
                      fontSize: 16,
                      backgroundColor: "white",
                    },
                  ]}
                >
                  Tipo de urgencia:
                </Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={options}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setOptions}
                  placeholder="Seleccionar"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "#154FBF",
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
    width: 30,
    height: 30,
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
    justifyContent: "flex-start",
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
    color: "#154FBF",
    marginRight: 5,
  },
  specContent: {
    color: "black",
  },
  selectorContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default CustomModal;
