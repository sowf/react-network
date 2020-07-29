import "./App.css";

import Header from "./components/Header/Header";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Navbar from "./components/Navbar/Navbar";
import PeopleContainer from "./components/People/PeopleContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import { Route } from "react-router-dom";

//TODO:отображение профиля при переходе (верстка)
//TODO:конкретизация при переходе

function App() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                    <Route
                        path="/messages"
                        render={() => <MessagesContainer />}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer />}
                    />
                    <Route path="/people" render={() => <PeopleContainer />} />
                </div>
            </div>
        </div>
    );
}

export default App;
