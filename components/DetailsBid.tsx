import { View, Text } from "react-native";
import { Bids } from "../constants/dummy";

interface Props {
  bid: Bids;
}

const DetailsBid = ({ bid }: Props) => {
  return (
    <View>
      <Text>DetailsBid</Text>
    </View>
  );
};

export default DetailsBid;
