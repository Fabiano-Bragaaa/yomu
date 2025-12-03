import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, View, TouchableOpacity, Image } from "react-native";

type ChapterItemProps = {
uri: string
}

export function ChapterItem({uri}: ChapterItemProps) {
  const navigation = useNavigation()
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{ width, height }}>
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
      />
    </View>
  );
}

