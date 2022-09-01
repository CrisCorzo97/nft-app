import { useEffect, useRef, useState } from "react";
import { Image, View, Dimensions } from "react-native";
import { assets, COLORS } from "../constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

interface Props {
  navigation: any;
  route: any;
}

const Splash: React.FC<Props> = ({ navigation, route }) => {
  const progress = useSharedValue(0);
  const translateIconY = useSharedValue(0);
  const translateTextY = useSharedValue(0);
  const scale = useSharedValue(1);

  const { width, height } = Dimensions.get("window");

  const rScale = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);

  const reanimatedIconStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateIconY.value,
      [0, 1],
      [-300, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: progress.value,
      transform: [{ translateY }],
    };
  }, []);

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateTextY.value,
      [0, 1],
      [300, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: progress.value,
      transform: [{ translateY }],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(1, { duration: 500 });
    translateIconY.value = withSpring(1);
    translateTextY.value = withSpring(1);
    setTimeout(() => {
      scale.value = withSpring(1);
    }, 800);
    setTimeout(() => {
      scale.value = withSpring(1.7);
    }, 1200);
    setTimeout(() => {
      scale.value = withSpring(1);
    }, 1600);
    setTimeout(() => {
      progress.value = withTiming(0, { duration: 300 });
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Animated.View
        style={[
          {
            width,
            height,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          },
          rScale,
        ]}
      >
        <Animated.View
          style={[{ width: 110, height: "100%" }, reanimatedIconStyle]}
        >
          <Image
            source={assets.iconLogo}
            resizeMode="contain"
            style={{ width: 110, height: "100%" }}
          />
        </Animated.View>
        <Animated.View
          style={[{ width: 120, height: "100%" }, reanimatedTextStyle]}
        >
          <Image
            source={assets.textLogo}
            resizeMode="contain"
            style={{ width: 120, height: "100%" }}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Splash;
