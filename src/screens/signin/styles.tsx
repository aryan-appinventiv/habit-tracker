import { StyleSheet} from 'react-native';
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
  forgotCont: {
    alignSelf: 'flex-end',
    marginVertical: vh(20),
    paddingHorizontal: vw(10),
  },
  forgotText: {
    fontWeight: '600',
  },
  mainCont: {
    flex: 1,
    paddingVertical: Wheight * 0.1,
    marginBottom: vh(10),
  },
  btn:{
    marginTop: vh(30)
  }
});

export default styles;
