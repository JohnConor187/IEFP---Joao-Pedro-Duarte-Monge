import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import MyRecipes from './MyRecipes';
import Profile from './Profile';
import SearchRecipes from './SearchRecipe';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Home() {
  return (
    //Para esconder a barra de voltar para tras e titulo colocada por defeito screenOptions={{ headerShown: false }}
    <Tab.Navigator screenOptions={{ headerShown: false,         tabBarActiveTintColor: 'orange',
}}>
      <Tab.Screen
        name="MyRecipes"
        component={MyRecipes}
        options={{
          tabBarLabel: 'My Recipes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="kitchen-set" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchRecipes"
        component={SearchRecipes}
        options={{
          tabBarLabel: 'Search Recipe',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
