import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {apiZomato,apiInstagrin} from '../../helper/apiurl'

export const Loginaction = ({email,password}) => {
    return (dispatch) => {
        dispatch ({ type : 'START_LOGIN' })
        if(email !== '' && password !== '') {
            axios.post(`${apiInstagrin}/user/login`, { email, password })
                .then(async (res) => {
                    try {
                        await AsyncStorage.setItem('usertoken', res.data.token);
                        dispatch({
                            type: 'LOGIN_SUCCESS',
                            payload: res.data
                        });
                    } catch (err) {
                        dispatch({ 
                            type: 'LOGIN_FAILED', 
                            payload: err.message 
                        });
                    }   
                }).catch(err => {
                    dispatch({
                        type: 'LOGIN_FAILED',
                        payload: err.response.data.message
                    })
                })
        } else {
            dispatch({ 
                type: 'LOGIN_FAILED', 
                payload: 'Please Fill Email and Password'
            })
        }
    }
}

export const Logindoang = (username) => {
    return (dispatch) => {
        dispatch ({ type : 'START_LOGIN'})
        if (username !== '') {
            const login = async () => {
                try {
                    await AsyncStorage.setItem('username',username)
                    dispatch ({
                        type : 'LOGIN_DOANG_SUCCESS',
                        payload : username
                    })
                } catch (err) {
                    dispatch({ 
                        type : 'LOGIN_FAILED', 
                        payload : 'Ops, there is a problem'
                    })
                }
            }
            login()
            
        } else {
            dispatch({ 
                type : 'LOGIN_FAILED', 
                payload : 'Please Fill Username'
            })
        }
    }
}

export const Logoutaction = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('username')
        dispatch({ type: 'LOGOUT' })
    }
}