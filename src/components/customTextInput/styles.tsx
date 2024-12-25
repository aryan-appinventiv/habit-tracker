import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderRadius: vw(20),
    marginVertical: vh(10),
    borderWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? vh(12) : 0,
    paddingHorizontal: vw(12),
    backgroundColor: colors.white,
    borderColor: colors.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    gap: vw(10),
  },
  icon: {
    height: vh(20),
    width: vh(20),
  },
  textInput: {
    flex: 1,
    fontSize: vh(14),
    color: colors.text,
    paddingRight: vw(15),
  },
  error: {
    color: colors.red,
    marginBottom: vh(10),
    paddingHorizontal: vw(15),
  },
  label: {
    color: colors.text,
    fontSize: vh(13),
    letterSpacing: 0.6,
    fontWeight: '400',
    paddingHorizontal: vw(10),
    marginTop: vh(10),
  },
});
export default styles;
