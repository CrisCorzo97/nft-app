import { View, Text, Image } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

interface NFTTitleProps {
  title: string;
  subtitle: string;
  titleSize: number;
  subtitleSize: number;
}

export const NFTTitle = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}: NFTTitleProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.black,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subtitleSize,
          color: COLORS.gray,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }: { price: number }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({
  imgUrl,
  index,
}: {
  imgUrl: string;
  index: number;
}) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp key={`People-${index}`} imgUrl={imgUrl} index={index} />
        )
      )}
    </View>
  );
};

export const EndDate = ({ endDate }: { endDate: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignContent: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.gray,
          textAlign: "center",
        }}
      >
        EndDate
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {endDate}
      </Text>
    </View>
  );
};

export const SubInfo = ({ endDate }: { endDate: string }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate endDate={endDate} />
    </View>
  );
};
