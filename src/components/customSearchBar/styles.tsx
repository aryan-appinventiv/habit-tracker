import { Platform, StyleSheet } from "react-native"
import { vh, vw } from "../../utils/dimensions"
import { colors } from "../../utils/colors"

export const getStyles = (theme:any)=>{
    return StyleSheet.create({
        input: {
            flexDirection: 'row',
            gap: vw(13),
            borderWidth: 1,
            borderColor: colors.lightgray,
            paddingHorizontal: vh(10),
            paddingVertical: Platform.OS === "ios"? vh(10) : vh(3),
            borderRadius: vh(20),
            backgroundColor: theme.inputBackground,
            alignItems: 'center',
          },
          searchIcon: {
            height: vh(18),
            width: vh(18),
          },
          placeholder: {
            color: colors.gray,
            fontSize: vh(15),
            fontWeight: '500',
            flex: 1,
            letterSpacing: 1,
          },
    })
}