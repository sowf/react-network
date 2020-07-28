import "./PersonProfile.css";

import DefaultUserImage from "../../assets/defaultUserImage.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Person = (props) => {
    let onFollowClick = () => {
        props.follow(props.id);
    };

    let onUnfollowClick = () => {
        props.unfollow(props.id);
    };

    return (
        <div className="row my-3">
            <div className="col-2 my-2">
                <div className="my-2">
                    <img
                        className="profilePic ml-2"
                        src={props.image ? props.image : DefaultUserImage}
                    />
                </div>
            </div>
            <div className="col-5 mt-3 pl-4">
                <div>
                    <NavLink to={'/profile/'+props.id}>{props.name}</NavLink>
                </div>
                <div>{props.status ? props.status : ""}</div>
            </div>
            <div className="col-5 mt-5 text-right">
                {props.followed ? (
                    <button class="btn btn-primary" onClick={onUnfollowClick}>
                        Отписаться
                    </button>
                ) : (
                    <button class="btn btn-primary" onClick={onFollowClick}>
                        Подписаться
                    </button>
                )}
            </div>
        </div>
    );
};

export default Person;
