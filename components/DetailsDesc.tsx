import { View, Text } from "react-native";
import { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { NFT } from "../constants/dummy";
import { COLORS, FONTS, SIZES } from "../constants";

interface Props {
  data: NFT;
}

const DetailsDesc = ({ data }: Props) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.black,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.gray,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
