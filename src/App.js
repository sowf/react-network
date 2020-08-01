import "./App.css";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from './components/Login/LoginContainer'
import MessagesContainer from "./components/Messages/MessagesContainer";
import Navbar from "./components/Navbar/Navbar";
import PeopleContainer from "./components/People/PeopleContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import { Route } from "react-router-dom";

//TODO:роутинг до от чужого профиля до домашней
//TODO:рефакторинг кода
//TODO:создание lazy загрузки 
//TODO:каптча
//TODO:редактирование профиля
//TODO:смена фотки
//TODO:
//TODO:

function App() {
    return (
        <div>
            <HeaderContainer />
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                    <Route
                        path="/messages"
                        render={() => <MessagesContainer />}
                    />
                    <Route
                        path="/profile/:userId"
                        render={() => <ProfileContainer />}
                    />
                    <Route path="/people" render={() => <PeopleContainer />} />
                    <Route path="/login" render={() => <LoginContainer />} />
                </div>
            </div>
        </div>
    );
}

export default App;
