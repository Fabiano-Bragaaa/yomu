import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

type ChapterItemProps = {
  uri: string;
};

export function ChapterItem({ uri }: ChapterItemProps) {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const [loading, setLoading] = useState(true);
  return (
    <View
      style={{ width, height }}
      >
      <TouchableOpacity
        className="absolute z-10 self-start p-4"
        onPress={navigation.goBack}
      >
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
     

      <Image
        source={{
          uri,
        }}
        style={{ width, height }}
        resizeMode="contain"
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
       {loading && (
          <View className='absolute w-full h-full z-10 justify-center items-center'>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
    </View>
  );
}
