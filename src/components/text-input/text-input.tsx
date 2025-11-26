import { useState } from 'react';
import {
  TextInput as RNTextInput,
  type TextInputProps,
  View,
} from 'react-native';
import { twMerge } from 'tailwind-merge';

type SearchInputProps = Pick<
  TextInputProps,
  'value' | 'onChangeText' | 'placeholder'
>;

export function TextInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={twMerge(
        'h-14 flex-row items-center justify-between rounded-2xl border border-gray-600 p-3',
        isFocused && 'border-gray-400'
      )}
    >
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#9ca3af"
        className="flex-1 text-white"
      />
    </View>
  );
}
