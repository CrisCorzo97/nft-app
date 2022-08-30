import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

interface CircleButtonProps {
  imgUrl: string;
  handlePress: () => void;
  right: number;
  top: number;
}

export const CircleButton = ({
  imgUrl,
  handlePress,
  right,
  top,
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        top: top,
        right: right,
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

interface RectButtonProps {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}

export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
}: RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
