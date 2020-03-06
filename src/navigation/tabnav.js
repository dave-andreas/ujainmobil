import React from 'react';
import {Icon} from 'react-native-elements'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../components/home'
import Chat from '../components/chat'

const Tab = createBottomTabNavigator()

function Tabnav () {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconname
                    if (route.name === 'Home') {
                        iconname = focused ? 'home' : 'home'
                    } else if (route.name === 'Chat') {
                        iconname = focused ? 'message' : 'message'
                    }
                    return <Icon name={iconname} size={size} color={color} />
                }
            })}
            tabBarOptions={{activeTintColor:'#8ac6d1',inactiveTintColor:'#30475e',showLabel:false}}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Chat' component={Chat} />
        </Tab.Navigator>
    )
}

export default Tabnav