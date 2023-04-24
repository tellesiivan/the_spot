import 'expo-dev-client'
import React from 'react'
import { NativeNavigation } from 'app/navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <Provider>
        <NativeNavigation />
      </Provider>
    </SafeAreaProvider>
  )
}
