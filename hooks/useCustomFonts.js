import * as Font from "expo-font";

export default useCustomFonts = async () => {
  await Font.loadAsync({
    "Kufam-SemiBoldItalic": require("../assets/fonts/Kufam-SemiBoldItalic.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
  });
};