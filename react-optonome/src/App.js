import Header from './components/Header';
import Body from "./components/Body";
import React from 'react';

const App = () => 
{

const [darkMode, setDarkMode] = React.useState('');

React.useEffect(()=> {changeMode()}, [darkMode]) //useEffect will watch changes in only the darkMode while re rendering component

const changeMode = () => 
{
  localStorage.setItem('dark', JSON.stringify(darkMode));
    var container = document.getElementsByClassName('container');
    var textelements = document.getElementsByClassName('mode');

    {darkMode ? document.body.style.backgroundColor = '#282828' : document.body.style.backgroundColor = 'initial' }
    
    for (var i = 0; i < container.length; i++ ) {
        {darkMode ? container[i].style.backgroundColor = '#282828' : container[i].style.backgroundColor = 'initial' }
    }
    for (var i = 0; i < textelements.length; i++ ) {
        {darkMode ? textelements[i].style.color = 'white' : textelements[i].style.color = 'initial' }
    }  
    console.log(darkMode)
}

  return (
    <>
      <Header />
      <Body switchMode={() => setDarkMode(!darkMode)}/>
    </>
  );
}

export default App;