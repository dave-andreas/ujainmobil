import React, { useState, useReducer, useEffect } from 'react'
import {View, Text, StatusBar, AsyncStorage} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import {CommonActions} from '@react-navigation/native'
import {Loginaction,Logindoang} from '../redux/actions'

const reducers = (state,action) => {
    switch (action.type) {
        case 'onchange' :
            console.log(state)
            return {...state,[action.name]:action.payload}
        default :
            return state
    }
}

const Login = ({navigation,user,loading,error,Loginaction, Logindoang,username}) => {

    const [state,dispatch] = useReducer(reducers,{username:'',password:''})
    const [hiden,sethiden] = useState(true)

    useEffect(()=>{
        // const cek = async () => {
        //     try {
        //         var username = await AsyncStorage.getItem('username')
        //         Logindoang(username)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
        // cek ()
        if(username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    {name:'Draw'}
                ]
            })
            navigation.dispatch(resetAction)
        }
    })

    const btnlogin = () => {
        if (loading) {
            // console.log(state.username, 'login')
            Logindoang(state.username)
        }
    }

    return (
        <>
            <StatusBar backgroundColor='#8ac6d1' />
            <View style={{alignItems:'center',flex:1,backgroundColor:'#fffdf9',paddingTop:180,paddingHorizontal:20}}>
                <Text style={{fontSize:50,fontWeight:'bold',color:'#30475e', marginBottom:50}}>Zoomatoe</Text>
                <View style={{width:'100%',marginBottom:20}}>
                    <Input placeholder='Username' leftIcon={<Icon name='account-circle' color='#30475e' size={22} />}
                        value={state.username} onChangeText={(text)=>dispatch({type:'onchange',name:'username',payload:text})} />
                </View>
                <View style={{width:'100%',marginBottom:100}}>
                    <Input placeholder='Password' secureTextEntry={hiden}
                        leftIcon={<Icon name='lock' color='#30475e' size={22} />} 
                        rightIcon={<Icon name={hiden ? 'visibility' : 'visibility-off'} color='#30475e' onPress={()=>sethiden(!hiden)} />}
                        value={state.password} onChangeText={(text)=>dispatch({type:'onchange',name:'password',payload:text})} />
                </View>
                <Text style={{color:'red'}}>{error}</Text>
                <Button title='Login' 
                    containerStyle={{width:'100%',marginBottom:50}} 
                    buttonStyle={{backgroundColor:'#30475e'}} 
                    titleStyle={{fontSize:20,fontWeight:'bold'}}
                    onPress={()=>btnlogin()} />
                <Text style={{color:'#30475e',fontSize:15}}>Dont have account yet ?</Text>
                <Button title='Register' 
                    containerStyle={{width:'100%'}} 
                    buttonStyle={{backgroundColor:'#8ac6d1'}} 
                    titleStyle={{fontSize:20,fontWeight:'bold'}} 
                    onPress={()=>navigation.navigate('Register')} />
            </View>
        </>
    );
};

const mapstatetoprops = ({auth}) => {
    return {
        user : auth.user,
        username : auth.username,
        loading : auth.loadinglogin,
        error : auth.errorlogin
    }
}

export default connect(mapstatetoprops,{Loginaction,Logindoang}) (Login);