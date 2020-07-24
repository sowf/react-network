import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

//TODO:Добвавить ключ-свойство
//TODO:Добавить страничку пользователей


function App() {

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Route path='/messages' render={ () => <MessagesContainer />} />
          <Route path='/profile' render={ () => <ProfileContainer />}/>
        </div>
      </div>
    </div>
  );
}


export default App;
