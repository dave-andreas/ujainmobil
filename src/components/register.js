import React, { useState, useReducer } from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements'

const reducers = (state,action) => {
    switch (action.type) {
        case 'onchange' :
            console.log(state)
            return {...state,[action.name]:action.payload}
        default :
            return state
    }
}

const App = ({navigation}) => {

    const [state,dispatch] = useReducer(reducers,{email:'',username:'',password:'',confpass:''})
    const [hiden,sethiden] = useState(true)
    const [confhiden,setconfhiden] = useState(true)

    return (
        <>
            <StatusBar backgroundColor='#8ac6d1' />
            <View style={{alignItems:'center',flex:1,backgroundColor:'#fffdf9',paddingTop:180,paddingHorizontal:20}}>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#30475e', marginBottom:50}}>Create Account</Text>
                <View style={{width:'100%',marginBottom:20}}>
                    <Input placeholder='Email' 
                        leftIcon={<Icon name='email' color='#30475e' size={22} />}
                        value={state.email} onChangeText={(text)=>dispatch({type:'onchange',name:'email',payload:text})} />
                    <Input placeholder='Username' 
                        leftIcon={<Icon name='account-circle' color='#30475e' size={22} />}
                        value={state.username} onChangeText={(text)=>dispatch({type:'onchange',name:'username',payload:text})} />
                </View>
                <View style={{width:'100%',marginBottom:100}}>
                    <Input placeholder='Password' secureTextEntry={hiden}
                        leftIcon={<Icon name='lock' color='#30475e' size={22} />} 
                        rightIcon={<Icon name={hiden ? 'visibility' : 'visibility-off'} color='#30475e' onPress={()=>sethiden(!hiden)} />}
                        value={state.password} onChangeText={(text)=>dispatch({type:'onchange',name:'password',payload:text})} />
                    <Input placeholder='Re-enter Password' secureTextEntry={confhiden}
                        leftIcon={<Icon name='lock' color='#30475e' size={22} />} 
                        rightIcon={<Icon name={confhiden ? 'visibility' : 'visibility-off'} color='#30475e' onPress={()=>setconfhiden(!confhiden)} />}
                        value={state.confpass} onChangeText={(text)=>dispatch({type:'onchange',name:'confpass',payload:text})} />
                </View>
                <Button title='Register It!' 
                    containerStyle={{width:'100%'}} 
                    buttonStyle={{backgroundColor:'#8ac6d1'}} 
                    titleStyle={{fontSize:20,fontWeight:'bold'}}
                    onPress={()=>navigation.navigate('Draw')} />
            </View>
        </>
    );
};

export default App;