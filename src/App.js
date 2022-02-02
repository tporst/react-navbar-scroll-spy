
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import ContactUs from './components/ContactUs';
import GiftGuide from './components/GiftGuide';
import Gallery from './components/Gallery';
import {NavBarScrollSpy} from './components/NavBarScrollSpy';


const App = () => {
  //todos: translation and page content load from json file
  let items = [
                {id:'about', item:'About'},
                 {id:'gallery', item:'Gallery'}
              ];
  
  let img =  <img src="/surprise.png" width="30" height="30" className="" alt="React Bootstrap logo"/>
  
  return (
    <div>
      {/* build components dynamicly */}
          <NavBarScrollSpy items = {items} bg="dark" variant="dark" img={img} >
            {/* children can not be surounded by any outer tag     <About id={items[0].id} />  */}
            <About  /> 
            <Gallery /> 
          {/*   <Gallery  id={items[1].id} />
            <GiftGuide  id={items[2].id} /> 
            <div className='NavBarPadding'>
           
          </div>*/}
        </NavBarScrollSpy>
    </div>
  )
  };

export default App;
