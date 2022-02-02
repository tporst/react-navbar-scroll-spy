import './css/NavBar.css'
import store from '../store/store.js'
import { Provider } from 'react-redux'
import {InternalNavBar} from './InternalNavBar'
/* 
    Wrapper component providing global store to all children components
*/
const NavBarScrollSpy = (props) =>{       
    return(
        <div >          
            <Provider store={store}>
                <InternalNavBar {...props}>
                    {props.children}  
               </InternalNavBar>   
           </Provider>     
        </div>)
}

export { NavBarScrollSpy};