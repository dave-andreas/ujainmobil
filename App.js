import React, { useEffect } from 'react';
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {Logindoang} from './src/redux/actions'
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './src/redux/reducers'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/components/login'
import Register from './src/components/register'
import Draw from './src/navigation/drawer'

const Stack = createStackNavigator()

function App ({Logindoang}) {

  useEffect (()=>{
    const cek = async () => {
      try {
        var username = await AsyncStorage.getItem('username')
        Logindoang(username)
      } catch (err) {
        console.log(err)
      }
    }
    cek ()
  })

  return (
    // <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
          <Stack.Screen name='Register' component={Register} options={{headerShown:false}} />
          <Stack.Screen name='Draw' component={Draw} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  )
}

 
export default connect(null,{Logindoang}) (App)