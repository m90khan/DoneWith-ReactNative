import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';
// js object to overwrite theme
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
