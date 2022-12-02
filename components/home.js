import { useTailwind } from "tailwind-rn";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";

const Home = () => {
  const tw = useTailwind();

  const data = [
    {
      id: 0,
      image: require("../assets/CarouselImages/ImageCarousel.jpg"),
    },
    {
      id: 1,
      image: require("../assets/CarouselImages/ImageCarousel2.jpg"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={tw("h-96 w-full rounded-3xl")}
          source={item.image}
        ></Image>
        <View
          style={tw("absolute bottom-0 bg-white/60 w-full h-1/2 rounded-b-3xl")}
        >
          <Text style={tw("text-white")}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={tw("flex-1 bg-[#353535]")}>
      <View style={tw("flex flex-row items-center px-8")}>
        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          style={tw("bg-[#E8E4FF] rounded-lg p-2 mt-14")}
        >
          <Feather name="align-left" color="#8C7BFF" size={24} />
        </TouchableOpacity>
      </View>
      <View style={tw("my-6")}>
        <Carousel
          data={data}
          renderItem={renderItem}
          useScrollView={true}
          enableSnap={true}
          loop={true}
          sliderWidth={wp("100%")}
          sliderHeight={hp("100%")}
          itemWidth={wp("90%")}
          itemHeight={hp("90%")}
          layout={"stack"}
        />
      </View>
    </View>
  );
};

export default Home;
