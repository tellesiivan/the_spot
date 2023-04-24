import React from 'react'
import { YStack, Text, XStack, H3, H4 } from '@my/ui'

type LayoutContainerProps = {
  children: React.ReactNode
  screenTitle: string
}

export const LayoutContainer = ({ children, screenTitle }: LayoutContainerProps) => {
  return (
    <YStack space flex={1} fullscreen bg="$blue10" p="$4">
      <XStack ai="center" jc="space-between">
        <Text>Previous</Text>
        <H4>{screenTitle}</H4>
        <Text>action</Text>
      </XStack>
      {children}
    </YStack>
  )
}
