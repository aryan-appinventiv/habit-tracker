import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {vh, vw, Wheight} from '../../utils/dimensions';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: vw(20),
  },
  heading: {
    fontSize: vh(24),
    letterSpacing: 0.8,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
    marginVertical: vh(20),
  },
  mainCont: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Wheight * 0.2,
  },
  btn:{
    marginTop: vh(30)
  }
});

export default styles;
