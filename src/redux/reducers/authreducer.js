const INITIAL_STATE = {
    user : null,
    username : null,
    loadinglogin : false,
    loadingregis : false,
    errorlogin : '',
    errorregis : ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_LOGIN' :
            return {...state, loadinglogin:true}
        case 'LOGIN_SUCCESS' :
            return {...state, loadinglogin:false, user:action.payload}
        case 'LOGIN_FAILED' :
            return {...state, loadinglogin:false, errorlogin:action.payload}
        case 'LOGIN_DOANG_SUCCESS' :
            return {...state, loadinglogin:false, username:action.payload}
        case 'LOGOUT' :
            return {...state, INITIAL_STATE}
        default :
            return state
    }
}