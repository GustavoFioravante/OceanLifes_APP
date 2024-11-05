import * as React from 'react';
import { RoutesNav } from "./src/Routes/Navigator";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/standart";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, AtkinsonHyperlegible_400Regular, AtkinsonHyperlegible_700Bold } from "@expo-google-fonts/atkinson-hyperlegible";
import { SourceSansPro_400Regular,SourceSansPro_600SemiBold,SourceSansPro_700Bold,SourceSansPro_900Black} from "@expo-google-fonts/source-sans-pro";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    AtkinsonHyperlegible_400Regular, AtkinsonHyperlegible_700Bold, SourceSansPro_400Regular,SourceSansPro_600SemiBold,SourceSansPro_700Bold,SourceSansPro_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error){
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RoutesNav/>
    </ThemeProvider>
  )
}
