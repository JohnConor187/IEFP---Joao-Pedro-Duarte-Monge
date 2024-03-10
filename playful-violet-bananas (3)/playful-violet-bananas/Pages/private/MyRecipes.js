import { View, ScrollView,Text } from 'react-native';

import React, {useEffect,useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Recipe from "../../components/Recipe"

export default function MyRecipes() {

  const [recipes,setRecipes] = useState([])
  
  useEffect(()=> {
     //Código que executa apenas um vez no inicio do ecrã
      AsyncStorage.getItem('myrecipes').then( result => {
        if( result != null){
          setRecipes(JSON.parse(result))
        }
      })
  }
  ,[])

  return (
    <View  style={{height: "100%"}}>
         <ScrollView style={{marginBottom: 30,marginTop: 10}}>
      <View style={{justifyContent: "center",alignItems: "center"}}>
      { recipes.length > 0 ?
        recipes.map( element => {
         return( <Recipe element={element} key={element.id} savebtn={false}></Recipe>)
      }): <Text>A carregar ...</Text>}
      </View>
      </ScrollView>
    </View>
  );
}
