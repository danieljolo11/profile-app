import { useCallback, useEffect } from "react";
import { View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./authProvider";
import StackNavigator from "./StackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins300: require("./assets/FontFamily/Poppins-Light.ttf"),
    Poppins400: require("./assets/FontFamily/Poppins-Regular.ttf"),
    Poppins500: require("./assets/FontFamily/Poppins-Medium.ttf"),
    Poppins600: require("./assets/FontFamily/Poppins-SemiBold.ttf"),
    Poppins700: require("./assets/FontFamily/Poppins-Bold.ttf"),
    Poppins800: require("./assets/FontFamily/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AuthProvider>
          <TailwindProvider utilities={utilities}>
            <StackNavigator />
          </TailwindProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
