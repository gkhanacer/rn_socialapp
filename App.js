import React, { useState } from "react";
import Providers from "./navigation";

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

  return (<Providers/>);
};

export default App;
