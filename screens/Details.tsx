import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
import { assets, SHADOWS, SIZES } from "../constants";

interface DetailsProps {
  navigation: any;
  route: any;
}

const DetailsHeader = ({
  data,
  navigation,
}: {
  data: any;
  navigation: any;
}) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight && StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight && StatusBar.currentHeight + 10}
    />
  </View>
);

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        background="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          handlePress={() => {}}
          minWidth={170}
          fontSize={SIZES.large}
          shadow={SHADOWS.dark}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}></View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
