import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";

import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

interface Props {
  navigation: any;
  route: any;
}

const Home: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => (
              <NFTCard data={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.black }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
