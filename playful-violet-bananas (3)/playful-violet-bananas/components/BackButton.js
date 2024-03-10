import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({navigation}) {
  return (
    <TouchableOpacity onPress={ ()=>navigation.goBack() } style={{  position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 50,
    backgroundColor: "transparent",
    padding: 10,
    zIndex: 10}} >
            <AntDesign name="back" size={34} color="white" />
    </TouchableOpacity>
  );
}

