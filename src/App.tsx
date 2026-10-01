import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-semibold text-black dark:text-white">opencode test</Text>
      <Text testID="counter-value" className="mt-6 text-5xl font-bold text-black dark:text-white">
        {count}
      </Text>
      <Pressable
        testID="counter-button"
        accessibilityRole="button"
        accessibilityLabel="Increment counter"
        onPress={() => setCount((c) => c + 1)}
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 active:bg-blue-700"
      >
        <Text className="text-lg font-semibold text-white">Tap to count</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
