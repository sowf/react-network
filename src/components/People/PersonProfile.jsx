import "./PersonProfile.css";

import DefaultUserImage from "../../assets/defaultUserImage.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Person = (props) => {
    
    let onFollowClick = () => {
        props.followRequest(props.id)        
    };

    let onUnfollowClick = () => {
        props.unfollowRequest(props.id)
    };

    return (
        <div className="row my-3">
            <div className="col-md-2 col-sm-4 my-2">
                <div className="my-2 text-sm-left text-center">
                    <img
                        alt=''
                        className="profilePic ml-2"
                        src={props.image ? props.image : DefaultUserImage}
                    />
                </div>
            </div>
            <div className="col-sm-4 text-sm-left text-center mt-3 pl-md-5">
                <div>
                    <NavLink to={'/profile/'+props.id}>{props.name}</NavLink>
                </div>
                <div>{props.status ? props.status : ""}</div>
            </div>
            <div className="col-md-6 col-sm-4 mt-2 text-md-right text-sm-left text-center">
                {props.followed ? (
                    <button disabled={props.usersInFollowingProgress.some(id => id === props.id)} className="btn btn-primary" onClick={onUnfollowClick}>
                        Отписаться
                    </button>
                ) : (
                    <button disabled={props.usersInFollowingProgress.some(id => id === props.id)} className="btn btn-primary" onClick={onFollowClick}>
                        Подписаться
                    </button>
                )}
            </div>
        </div>
    );
};

export default Person;
