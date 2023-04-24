import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { YStack, Text, XStack, H3, H4 } from '@my/ui'

type LayoutContainerProps = {
  children: React.ReactNode
  screenTitle: string
}

export const LayoutContainer = ({ children, screenTitle }: LayoutContainerProps) => {
  // get safe area insets for mobile devices
  const insets = useSafeAreaInsets()

  return (
    <YStack space flex={1} bg="$background" pt={insets.top} pb={insets.bottom} px="$2.5">
      <XStack ai="center" jc="space-between">
        <Text>Previous</Text>
        <H4>{screenTitle}</H4>
        <Text>action</Text>
      </XStack>
      {children}
    </YStack>
  )
}
