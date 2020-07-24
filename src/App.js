import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

//TODO:Сделать передачу данных через контекст
//TODO:Добавить react-redux
//TODO:Добвавить ключ-свойство
//TODO:jsx убрать
//TODO:Добавить страничку пользователей


function App(props) {

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Route path='/messages' render={ () => <Messages state={props.state.messagesPage}  dispatch={props.dispatch}/>} />
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
        </div>
      </div>
    </div>
  );
}


export default App;
