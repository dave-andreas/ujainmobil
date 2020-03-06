import React,{Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers'
import App from './App'

// export default class AppCreateStore extends Component {
//     render () {
//         return (
//             <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
//                 <App />
//             </Provider>
//         )
//     }
// }

function AppCreateStore () {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
            <App />
        </Provider>
    )
}

export default AppCreateStore