import { useTailwind } from "tailwind-rn";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "react-native-vector-icons/Feather";

const Home = ({ navigation }) => {
  const tw = useTailwind();

  const items = [
    {
      itemName: "Maku rela Vera",
      image: require("../../assets/ItemsImage/cornImage.png"),
    },
    {
      itemName: "Pontiatus Evo",
      image: require("../../assets/ItemsImage/potPlant.png"),
    },
    {
      itemName: "Plant with Flower",
      image: require("../../assets/ItemsImage/plantImage.png"),
    },
  ];

  const carousdelData = [
    {
      id: 0,
      image: require("../../assets/upperImage.png"),
    },
    {
      id: 1,
      image: require("../../assets/CarouselImages/carouselImage2.png"),
    },
    {
      id: 2,
      image: require("../../assets/ItemsImage/potPlant.png"),
    },
  ];

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={tw("flex items-end w-full")}>
        <Image style={tw("h-72 w-72")} source={item.image}></Image>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={tw("w-full bg-[#4f7956] py-6 rounded-br-[4rem]")}>
        <View
          style={tw("flex flex-row justify-between items-center my-2 mx-6 ")}
        >
          <Text
            style={[tw("text-white text-lg"), { fontFamily: "Poppins400" }]}
          >
            Title
          </Text>
          <View style={tw("flex flex-row items-center")}>
            <Feather size={20} style={tw("text-white pr-8")} name="search" />
            <Feather
              size={20}
              style={tw("text-white bg-white/20 p-3 rounded-full")}
              name="shopping-bag"
            />
          </View>
        </View>
        <View style={tw("mb-20")}>
          <Carousel
            data={carousdelData}
            renderItem={renderCarouselItem}
            useScrollView={true}
            enableSnap={true}
            loop={true}
            autoplay={true}
            sliderWidth={wp("100%")}
            itemWidth={wp("100%")}
            layout={'default'}
          />
          {/* <Image
            style={tw("h-72 w-72")}
            source={require("../../assets/upperImage.png")}
          /> */}
        </View>
        <View style={tw("absolute bottom-10 left-8")}>
          <Text
            style={[
              tw("text-[50px] leading-[64px] text-[#e5dca5]"),
              { fontFamily: "Poppins500" },
            ]}
          >
            Top
          </Text>
          <Text
            style={[
              tw("text-[50px] leading-[64px] text-[#e5dca5]"),
              { fontFamily: "Poppins500" },
            ]}
          >
            picks
          </Text>
        </View>
        <ScrollView
          style={tw("absolute -bottom-2.5 flex flex-row px-8")}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          horizontal={true}
        >
          <View style={tw("flex flex-row")}>
            <Text
              style={tw("rounded-full py-1 px-1.5 bg-[#0e1111] text-white")}
            >
              16
            </Text>
            <Text
              style={tw(
                "ml-14 rounded-full py-1 px-2.5 bg-gray-400 text-white"
              )}
            >
              8
            </Text>
          </View>
          <Text
            style={tw("mr-14 rounded-full py-1 px-2.5 bg-gray-400 text-white")}
          >
            4
          </Text>
        </ScrollView>
      </View>
      <View style={tw("relative flex flex-row justify-between px-8 pt-5 pb-3")}>
        <Text
          style={[tw("text-2xl text-[#0e1111]"), { fontFamily: "Poppins600" }]}
        >
          All
        </Text>
        <Text
          style={[tw("text-2xl text-gray-400"), { fontFamily: "Poppins600" }]}
        >
          Outdoor
        </Text>
        <Text
          style={[tw("text-2xl text-gray-400"), { fontFamily: "Poppins600" }]}
        >
          Indoor
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={tw("flex flex-row justify-end my-2")} key={index}>
            <View style={tw("absolute left-2 z-10")}>
              <Image style={tw("h-32 w-32")} source={item.image} />
            </View>
            <View
              style={tw(
                "flex-row items-center justify-between px-10 py-8 bg-[#4f7956] w-[80%] rounded-l-3xl"
              )}
            >
              <View style={tw("flex flex-col w-[50%] z-50")}>
                <Text
                  style={[
                    tw("text-[#e5dca5] text-lg leading-5 pb-3"),
                    { fontFamily: "Poppins500" },
                  ]}
                >
                  {item.itemName}
                </Text>
                <View style={tw("flex-row justify-between")}>
                  <Feather
                    style={tw(
                      "border border-white/30 text-white/70 rounded-lg p-1.5 text-center"
                    )}
                    name="droplet"
                    size={18}
                  />
                  <Feather
                    style={tw(
                      "border border-white/30 text-white/70 rounded-lg p-1.5 text-center"
                    )}
                    name="thermometer"
                    size={18}
                  />
                  <Feather
                    style={tw(
                      "border border-white/30 text-white/70 rounded-lg p-1.5 text-center"
                    )}
                    name="sun"
                    size={18}
                  />
                </View>
              </View>
              <View style={tw("bg-white p-6 rounded-2xl")}>
                <Feather name="plus" color="#0e1111" size={36} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
