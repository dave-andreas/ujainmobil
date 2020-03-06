import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer'

import Tabnav from './tabnav'
import Setting from '../components/setting'

const Drawer = createDrawerNavigator()

function Draw () {
    return (
        <Drawer.Navigator initialRouteName='Tabnav' drawerPosition='right'
            drawerContentOptions={{activeTintColor:'#8ac6d1',inactiveTintColor:'#30475e',activeBackgroundColor:'transparent'}} >
            <Drawer.Screen name='Tabnav' component={Tabnav}
                options={{drawerLabel:()=>null,gestureEnabled:false}} />
            <Drawer.Screen name='Setting' component={Setting} />
        </Drawer.Navigator>
    )
}

export default Draw