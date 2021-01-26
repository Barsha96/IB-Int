import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/home/Header';
import Body from "./components/home/Body";
import ChatWrapper from "./components/chat/ChatWrapper"


const App = () => 
{

const [darkMode, setDarkMode] = React.useState('');

React.useEffect(()=> {changeMode()}, [darkMode]) //useEffect will watch changes in only the darkMode while re rendering component

const changeMode = () => 
{
  localStorage.setItem('dark', JSON.stringify(darkMode));
    let container = document.getElementsByClassName('container');
    let textelements = document.getElementsByClassName('mode');

    darkMode ? document.body.style.backgroundColor = '#282828' : document.body.style.backgroundColor = 'white' ;
    
    for (let i = 0; i < container.length; i++ ) {
        darkMode ? container[i].style.backgroundColor = '#282828' : container[i].style.backgroundColor = 'initial' ;
    }
    for (let i = 0; i < textelements.length; i++ ) {
        darkMode ? textelements[i].style.color = 'white' : textelements[i].style.color = '#5d5b5b' ;
    }  
    console.log(darkMode)
}

  return (
    <Router>
      <Route path='/' exact render={() => (
              <>
                <Header />
                <Body switchMode={() => setDarkMode(!darkMode)}/>
              </> 
      )} />
      
      <Route path='/chat' component={ChatWrapper} />
    </Router>
  );
}

export default App;