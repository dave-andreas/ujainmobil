import React, { useEffect, useState } from 'react';
import {View, Text, AsyncStorage} from 'react-native'
import {Icon, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import {Logoutaction} from '../redux/actions'
import { CommonActions } from '@react-navigation/native'

function Logout ({navigation,username,Logoutaction}) {
    const [name, setname] = useState(username)

    useEffect (()=>{
        const cek = async () => {
            try {
                var username = await AsyncStorage.getItem('username')
                setname(username)
            } catch (err) {
                console.log(err)
            }
        }
        cek ()
        if (!name) {
            console.log('masuk 2')
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Login' }
                ]
            })
            navigation.dispatch(resetAction)
        }
    })
    
    return (
        <>
            <View style={{alignItems:'center',flex:1,backgroundColor:'#fffdf9',paddingTop:180,paddingHorizontal:20}}>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#30475e', marginBottom:50}}>Logout Page</Text>
                <View style={{marginHorizontal:10,marginTop:150,width:'100%'}}>
                    <Button title='Logout' onPress={Logoutaction} />
                </View>
            </View>
        </>
    )
}

const mapstatetoprops = ({auth}) => {
    return {
        username : auth.username
    }
}

export default connect(mapstatetoprops,{Logoutaction}) (Logout)