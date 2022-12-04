import { useTailwind } from "tailwind-rn";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";

const Home = ({ navigation }) => {
  const tw = useTailwind();
  const [pressTitle, setPressTitle] = useState("Technology");

  const carousdelData = [
    {
      id: 0,
      image: require("../assets/CarouselImages/ImageCarousel.jpg"),
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      subtitle: "Subtitle",
      time: "3 Hours Ago",
      userImage: require("../assets/Users/user1.jpg"),
    },
    {
      id: 1,
      image: require("../assets/CarouselImages/ImageCarousel2.jpg"),
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      subtitle: "Subtitle",
      time: "2 Hours Ago",
      userImage: require("../assets/Users/user1.jpg"),
    },
  ];

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={tw("h-[32rem] w-full rounded-3xl")}
          source={item.image}
        ></Image>
        <View
          style={tw(
            "absolute bottom-0 bg-black/50 w-full h-[45%] rounded-b-3xl p-4"
          )}
        >
          <View>
            <Text
              style={[tw("text-white text-lg"), { fontFamily: "Poppins500" }]}
            >
              {item.title}
            </Text>
            <Text
              style={[tw("text-gray-300 mt-2"), { fontFamily: "Poppins400" }]}
            >
              {item.description}
            </Text>
          </View>
          <View
            style={tw(
              "absolute bottom-0 pl-4 pb-4 w-full flex flex-row justify-between"
            )}
          >
            <View>
              <Text
                style={[
                  tw("text-white leading-5"),
                  { fontFamily: "Poppins500" },
                ]}
              >
                {item.subtitle}
              </Text>
              <Text
                style={[
                  tw("text-gray-300 leading-5"),
                  { fontFamily: "Poppins400" },
                ]}
              >
                {item.time}
              </Text>
            </View>
            <Image
              style={tw("h-10 w-10 rounded-xl")}
              source={item.userImage}
            ></Image>
          </View>
        </View>
      </View>
    );
  };

  const FooterData = [
    {
      title: "Technology",
      image: require("../assets/iphone.png"),
      description: "iPhone 14: will everyone make small phones again?",
      type: "Tech",
      date: "September 16, 2022",
    },
    {
      title: "Sport",
      image: require("../assets/CarouselImages/ImageCarousel2.jpg"),
      description: "This is a Sport",
      type: "Sport",
      date: "September 16, 2022",
    },
    {
      title: "Movie",
      image: require("../assets/CarouselImages/ImageCarousel.jpg"),
      description: "This is a Movie",
      type: "Movie",
      date: "September 16, 2022",
    },
    {
      title: "Music",
      image: require("../assets/CarouselImages/ImageCarousel2.jpg"),
      description: "This is a Music",
      type: "Music",
      date: "September 16, 2022",
    },
    {
      title: "Car",
      image: require("../assets/CarouselImages/ImageCarousel.jpg"),
      description: "This is a Car",
      type: "Car",
      date: "September 16, 2022",
    },
  ];

  const renderFooter = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={tw("flex-1 flex-row justify-between items-center")}>
          {FooterData.map((item, index) => (
            <View key={index} style={tw("pr-8 border-b border-gray-700")}>
              <Text
                style={[
                  tw(
                    `${
                      pressTitle === item.title
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "border-b-2 border-transparent text-black"
                    } text-lg`
                  ),
                  { fontFamily: "Poppins500" },
                ]}
                onPress={() => setPressTitle(item.title)}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const renderFooterDisplay = () => {
    return (
      <>
        {FooterData.map(
          (item, index) =>
            pressTitle === item.title && (
              <View key={index} style={tw("flex flex-row items-center mt-2")}>
                <Image
                  style={tw("h-24 w-20 bg-black rounded-2xl")}
                  source={item.image}
                />
                <View style={tw("flex flex-col w-1/2 pl-2 w-[75%]")}>
                  <Text style={[tw("text-xs"), { fontFamily: "Poppins600" }]}>
                    {item?.description}
                  </Text>
                  <View
                    style={tw(
                      "flex flex-row items-center justify-between mt-3"
                    )}
                  >
                    <Text
                      style={[
                        tw("bg-blue-200 text-blue-700 px-4 text-center"),
                        { fontFamily: "Poppins400" },
                      ]}
                    >
                      {item?.type}
                    </Text>
                    <Text
                      style={[
                        tw("text-gray-600 text-xs"),
                        { fontFamily: "Poppins400" },
                      ]}
                    >
                      {item?.date}
                    </Text>
                  </View>
                </View>
              </View>
            )
        )}
      </>
    );
  };

  const renderContainer = (
    <View style={tw("flex-1 bg-white")}>
      <View style={tw("flex flex-row items-center px-8")}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={tw("bg-[#E8E4FF] rounded-lg p-2 mt-14")}
        >
          <Feather name="align-left" color="#8C7BFF" size={24} />
        </TouchableOpacity>
      </View>
      <View style={tw("my-6")}>
        <Carousel
          data={carousdelData}
          renderItem={renderCarouselItem}
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
      <View style={tw("pl-4 my-4")}>
        {renderFooter()}
        {renderFooterDisplay()}
      </View>
    </View>
  );

  return <>{renderContainer}</>;
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
});

export default Home;
