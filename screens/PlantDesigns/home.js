import { useTailwind } from "tailwind-rn";
import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("flex bg-white")}>
      <View style={tw("absolute w-full bg-[#436749] py-6 rounded-br-3xl")}>
        <View
          style={tw("flex flex-row justify-between items-center my-6 mx-6 ")}
        >
          <Text style={[tw("text-white"), { fontFamily: "Poppins400" }]}>
            Title
          </Text>
          <View style={tw("flex flex-row items-center")}>
            <Text style={[tw("pr-6 text-white"), { fontFamily: "Poppins400" }]}>
              Search
            </Text>
            <Text style={[tw("text-white"), { fontFamily: "Poppins400" }]}>
              Cart
            </Text>
          </View>
        </View>
        <View style={tw("flex items-end w-full mb-20")}>
          <Image
            style={tw("h-60 w-60")}
            source={require("../../assets/upperImage.png")}
          />
        </View>
        <View style={tw("absolute bottom-10 left-6")}>
          <Text style={[tw("text-[50px] leading-[64px] text-[#e5dca5]"), {fontFamily: "Poppins500"}]}>Top</Text>
          <Text style={[tw("text-[50px] leading-[64px] text-[#e5dca5]"), {fontFamily: "Poppins500"}]}>picks</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
