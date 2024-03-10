import { SafeAreaView, View, TextInput, Platform,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

import Recipe from "../../components/Recipe"

export default function SearchRecipes() {
  //Variavel de estado - Importante usar porque quando alteramos o valor automaticamente o ecrã faz refresh
  const [search, setSearch] = useState('');
  const [recipes,setRecipes] = useState([]);

  const data = (search) => {
    //Não pode existir espaços no url então subtituimos pelo caracter especial %20 que significa espaço
    const s = search.replace(" ","%20")
    const url =
      'https://food-recipes-with-images.p.rapidapi.com/?q=' + s;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5e8195b1ecmsh67c54c7110f69b9p1111eajsnd134d4bad209',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
      },
    };

    try {
      fetch(url, options).then(response => {
        response.json().then( result =>  setRecipes(result.d))
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
      }}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderRadius: 20,
          width: '80%',
          backgroundColor: 'white',
        }}>
        <TextInput
          placeholder="Search a recipe"
          style={{
            padding: 10,
            height: 50,
          }}
          value={search}
          onChangeText={(txt) => setSearch(txt)}></TextInput>
        <FontAwesome
          name="search"
          size={24}
          color="gray"
          style={{ padding: 10, height: 50 }}
          onPress={()=>{data(search)}}
        />
      </View>
      <ScrollView style={{marginBottom: 30,marginTop: 10}}>
      <View style={{justifyContent: "center",alignItems: "center"}}>
      {recipes.map( element => {
         return( <Recipe element={element} key={element.id} savebtn={true}></Recipe>)
      })}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
