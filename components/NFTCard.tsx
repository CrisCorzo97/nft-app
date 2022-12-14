import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { NFT } from "../constants/dummy";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

interface Props {
  data: NFT;
  navigation: any;
}

const NFTCard: React.FC<Props> = ({ data, navigation }) => {
  const handlePress = () => {};

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.extraLarge,
            borderTopRightRadius: SIZES.extraLarge,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={handlePress}
        />
      </View>

      <SubInfo endDate={data.endDate} />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
