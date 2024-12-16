import {Dimensions, PixelRatio} from 'react-native';
export const Wwidth = Dimensions.get('window').width;
export const Wheight = Dimensions.get('window').height;

export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 812;

export const vw = (width: number) => {
  const percent = (width / DESIGN_WIDTH) * 100;
  return PixelRatio.roundToNearestPixel((Wwidth * percent) / 100);
};

export const vh = (height: number) => {
  const percent = (height / DESIGN_HEIGHT) * 100;
  return PixelRatio.roundToNearestPixel((Wheight * percent) / 100);
};

export default {
  vh,
  vw,
  Wwidth,
  Wheight,
};
