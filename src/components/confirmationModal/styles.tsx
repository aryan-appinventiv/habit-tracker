import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      backgroundColor: colors.white,
      borderRadius: vw(10),
      padding: vw(20),
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: vw(18),
      fontWeight: 'bold',
      marginBottom: vh(10),
      textAlign: 'center',
    },
    modalSubtitle: {
      fontSize: vw(14),
      textAlign: 'center',
      marginBottom: vh(20),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cancelButton: {
      paddingVertical: vh(10),
      paddingHorizontal: vw(20),
      borderRadius: 5,
      flex: 1,
      marginRight: vw(5),
      alignItems: 'center',
    },
    okButton: {
      backgroundColor: colors.redTitle,
      paddingVertical: vh(10),
      paddingHorizontal: vw(20),
      borderRadius: vw(5),
      flex: 1,
      marginLeft: vw(5),
      alignItems: 'center',
    },
    buttonText: {
      color: colors.white,
      fontSize: vw(16),
      fontWeight: '600',
    },
  });

  export default styles;