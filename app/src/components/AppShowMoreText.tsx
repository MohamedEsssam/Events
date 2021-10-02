import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { Color } from "../config/Color";

interface Props {
  text: string;
  containerStyle?: ViewStyle;
  targetLines?: number;
}

const AppShowMoreText: React.FC<Props> = ({ text, targetLines = 1 }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((event) => {
    const { lines } = event.nativeEvent;
    setLengthMore(lines.length >= targetLines); //to check the text is more than target lines or not
  }, []);

  return (
    <View style={styles.mainBody}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : targetLines}
        style={{
          width: "95%",
          color: Color.medium,
          fontSize: 17,
          fontStyle: "italic",
          fontWeight: "400",
          flexWrap: "wrap",
        }}
      >
        {text}
      </Text>

      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={{
            lineHeight: 21,
            marginTop: 5,
            marginLeft: 2,
            color: Color.light,
          }}
        >
          {textShown ? "...Read less" : "Read more..."}
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    marginTop: 2,
  },
  txtStyle: {
    // fontFamily: fonts.secondary_regular_font,
    // fontSize: fontSize.modal_title_size,
    color: Color.medium,
    // flex: 1,
  },
  lessMoreStyle: {
    // fontFamily: fonts.secondary_regular_font,
    // fontSize: fontSize.modal_title_size,
    // color: colors.app_orange,
  },
});
export default AppShowMoreText;
