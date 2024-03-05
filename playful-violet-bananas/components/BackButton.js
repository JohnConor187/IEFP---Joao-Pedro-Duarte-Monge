import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({navigation}) {
  return (
    <TouchableOpacity onPress={ ()=>navigation.goBack() } style={{paddingTop: 50, backgroundColor: "none",justifyContent: "flex-start",width: "100%", padding: 20}} >
            <AntDesign name="back" size={34} color="white" />
    </TouchableOpacity>
  );
}

