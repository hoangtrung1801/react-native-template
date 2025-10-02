import { useColorScheme } from '@/hooks/useColorScheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
// import { useFonts } from 'expo-font';
import { WorkSans_100Thin } from '@expo-google-fonts/work-sans/100Thin';
import { WorkSans_100Thin_Italic } from '@expo-google-fonts/work-sans/100Thin_Italic';
import { WorkSans_200ExtraLight } from '@expo-google-fonts/work-sans/200ExtraLight';
import { WorkSans_200ExtraLight_Italic } from '@expo-google-fonts/work-sans/200ExtraLight_Italic';
import { WorkSans_300Light } from '@expo-google-fonts/work-sans/300Light';
import { WorkSans_300Light_Italic } from '@expo-google-fonts/work-sans/300Light_Italic';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans/400Regular';
import { WorkSans_400Regular_Italic } from '@expo-google-fonts/work-sans/400Regular_Italic';
import { WorkSans_500Medium } from '@expo-google-fonts/work-sans/500Medium';
import { WorkSans_500Medium_Italic } from '@expo-google-fonts/work-sans/500Medium_Italic';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans/600SemiBold';
import { WorkSans_600SemiBold_Italic } from '@expo-google-fonts/work-sans/600SemiBold_Italic';
import { WorkSans_700Bold } from '@expo-google-fonts/work-sans/700Bold';
import { WorkSans_700Bold_Italic } from '@expo-google-fonts/work-sans/700Bold_Italic';
import { WorkSans_800ExtraBold } from '@expo-google-fonts/work-sans/800ExtraBold';
import { WorkSans_800ExtraBold_Italic } from '@expo-google-fonts/work-sans/800ExtraBold_Italic';
import { WorkSans_900Black } from '@expo-google-fonts/work-sans/900Black';
import { WorkSans_900Black_Italic } from '@expo-google-fonts/work-sans/900Black_Italic';
import { useFonts } from '@expo-google-fonts/work-sans/useFonts';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import '../global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';

export default function RootLayout() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('[pathname]', pathname);
  }, [pathname]);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <KeyboardProvider>
          <SafeAreaView className='flex-1'>
            <Stack>
              <Stack.Screen name='index' options={{ headerShown: false }} />
              <Stack.Screen name='+not-found' />
            </Stack>
            <StatusBar style='auto' />
            <PortalHost />
          </SafeAreaView>
        </KeyboardProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
