import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="restaurants" component={Restaurants}/>
                <Tab.Screen name="favorites" component={Favorites}/>
                <Tab.Screen name="topRestaurants" component={TopRestaurants}/>
                <Tab.Screen name="search" component={Search}/>
                <Tab.Screen name="account" component={Account}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
