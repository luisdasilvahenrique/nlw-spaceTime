import { ImageBackground } from "react-native";
import { useState, useEffect } from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { SplashScreen, Stack } from "expo-router";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import blurBg from "../src/assets/bg-blur.png";
import Stripes from "../src/assets/stripes.svg";

import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";

import * as SecureStore from "expo-secure-store"

const StyledStripes = styled(Stripes);

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);

  const [hasLoaderFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });
 
  useEffect(() => {
    SecureStore.getItemAsync('token').then(token => {
        setIsUserAuthenticated(!!token)
    })
  }, [])

  if (!hasLoaderFonts) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      imageStyle={{ position: "absolute", left: "-100%" }}
      source={blurBg}
      className="relative flex-1 bg-gray-900 "
    >
      <StyledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated}/>
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
      </Stack>
    </ImageBackground>
  );
}
