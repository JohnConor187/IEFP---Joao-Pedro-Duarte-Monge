//Importar componentes nativos que são "traduzidos" em código oem swift(IOS) ou kotlin/java(Android)  
import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

//Quando queremos usar a navegação entre páginas temos que incluir a parametro {navigation} na function
export default function Home({navigation}) {
  return (
    //@ImageBackground -> Componente usado para colocar uma imagem de fundo na app
    <ImageBackground
      source={{
        uri: 'https://virtualbackgrounds.site/wp-content/uploads/2020/07/cooking-in-a-white-kitchen.jpg',
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover">
      {/*@View -> Parecido com o div do html*/}
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/*@TouchableOpacity -> Componente utilizado para garantir que os botões têm o mesmo formato no android e ios. O componente button não garante.
        //Para navegar para outro ecrã que sabemos o name. () => navigation.navigate("NAME do ecrã que está a APP.JS")
        */}
        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate("Login") }>
          <Text style={styles.btnTxt}>Sign in</Text>
        </TouchableOpacity>

        <Text
          style={[styles.btnTxt, { fontSize: 16, marginTop: 10 }]}
          onPress={() => navigation.navigate("Register") }>
          Sign up
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btn: {
      width: "70%",
      backgroundColor: "#fc8c03",
      color: "white",
      height: 50,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center"
  },
  btnTxt: 
  {
    color: "white",
    fontSize: 20
  }

});