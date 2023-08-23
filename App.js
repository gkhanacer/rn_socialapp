import React, { useState } from "react";
import Providers from "./navigation";

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

import AppLoading from "expo-app-loading";
import useCustomFonts from "./hooks/useCustomFonts";

// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useCustomFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  // const [fontsLoaded] = useFonts({
  //   "Kufam-SemiBoldItalic": require("./assets/fonts/Kufam-SemiBoldItalic.ttf"),
  //   "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (<Providers/>);
};

export default App;
