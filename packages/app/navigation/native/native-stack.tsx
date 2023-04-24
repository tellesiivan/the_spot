import { createNativeStackNavigator } from '@react-navigation/native-stack'

type StackNavigator = {
  home: undefined
  'user-detail': {
    id: string
  }
}

export const Stack = createNativeStackNavigator<StackNavigator>()

function NativeStack() {}
