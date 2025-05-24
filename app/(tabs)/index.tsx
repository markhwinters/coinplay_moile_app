import React from "react";
import { ScrollView, View } from "react-native";

const index = () => {
  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        Home Page
      </ScrollView>
    </View>
  );
};

export default index;
