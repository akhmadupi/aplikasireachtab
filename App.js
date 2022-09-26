import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';


import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailScreen';
import OrderScreen from './app/screens/OrderScreen';
import Datapesanan from './app/screens/Datapesanan';
//import Datates from './app/content/Datates';
//import Datates from "../content/Datates";


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
       name="HomeScreen" component={HomeScreen} 
       options={{
        tabBarLabel: 'Home',
        title: 'Raja Rumah',
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      }}

       />
      <HomeStack.Screen 
      name="Details" 
      component={DetailsScreen}
      options={{
        title: 'Detail Rumah',
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      }} />

<HomeStack.Screen 
      name="Ordersdata" 
      component={OrderScreen}
      options={{
        title: 'Form Pembelian',
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      }} />

    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function OrdersStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
      name="Ordersr" 
      component={Datapesanan}
      options={{
        title: 'Data Pesanan',
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      }} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        headerTitleAllowFontScaling:20,
        tabBarStyle: {
          backgroundColor: '#00BFFF',
          position: 'relative',
          bottom: 0,
          left: 0,
          elevation: 0,
          // flex: 1,
          height: 70,
          paddingBottom: 10,
        }
         }}>
          
        <Tab.Screen name="Home" 
       // initialParams={{ ...params, article: null }}
        component={HomeStackScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="coral" />
          ),
        }}/>

        <Tab.Screen 
        name="Pesanan" 
        component={OrdersStackScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={28} color="coral" />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


