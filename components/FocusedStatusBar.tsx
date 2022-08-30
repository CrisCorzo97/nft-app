import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface Props {
  background: string;
}

export const FocusedStatusBar: React.FC<Props> = ({ background }) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated={true} backgroundColor={background} />
  ) : null;
};

export default FocusedStatusBar;
