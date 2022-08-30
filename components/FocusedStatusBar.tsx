import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface Props {
  background: string;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
}

export const FocusedStatusBar: React.FC<Props> = ({
  background,
  barStyle,
  translucent = false,
}) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      animated={true}
      backgroundColor={background}
      barStyle={barStyle}
      translucent={translucent}
    />
  ) : null;
};

export default FocusedStatusBar;
