import "./PersonProfile.css";

import React from "react";

const Person = (props) => {

  let onFollowClick = () => {
    props.follow(props.id)
  }

  let onUnfollowClick = () => {
    props.unfollow(props.id)
  }

  return (
    <div className="row my-3">
      <div className="col-2 my-2">
        <div className="my-2">
          <img
            className="profilePic ml-2"
            src="https://www.villadipiazzano.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
          />
        </div>
      </div>
      <div className="col-5 mt-3 pl-4">
        <div> {props.name} </div>
        <div> {props.coutry} </div>
        <div> {props.city} </div>
      </div>
      <div className="col-5 mt-5 text-right">
        
        {props.followed ? 
          <button class="btn btn-primary" onClick={onUnfollowClick}>Отписаться</button> :
          <button class="btn btn-primary" onClick={onFollowClick}>Подписаться</button>
        }
      </div>
    </div>
  );
};

export default Person;
