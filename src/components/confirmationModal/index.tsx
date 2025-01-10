import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { getStyles } from './styles';
import { colors } from '../../utils/colors';
import { useThemeColors } from '../../utils/themeSelector';

interface ConfirmationModalProps{
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  desc: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onClose,
  onConfirm,
  title,
  desc,
}) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent
          ]}
        >
          <Text style={styles.modalTitle}>{title}</Text>
          <Text
            style={[
              styles.modalSubtitle,
            ]}
          >
            {desc}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.cancelButton,
                { backgroundColor: colors.borderClr },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: colors.black },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.okButton}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
