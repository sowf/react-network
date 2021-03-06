import "./PersonProfile.css";

import PersonProfile from "./PersonProfile";
import React from "react";

const People = (props) => {
    let pagesCount = Math.ceil(
        props.peoplePage.totalUsersCount / props.peoplePage.pageSize
    );

    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    let peopleArray = props.peoplePage.people.map((person) => (
        <PersonProfile
            key={person.id}
            id={person.id}
            name={person.name}
            status={person.status}
            image={person.photos.large}
            usersInFollowingProgress={props.peoplePage.usersInFollowingProgress}
            followed={person.followed}
            followRequest={props.followRequest}
            unfollowRequest={props.unfollowRequest}
        />
    ));

    let selectPage = React.createRef();

    return (
        <div className="col-md-9">
            <div className="row">
                <div className="col-md-4 col-sm-4 text-sm-right mt-2 ml-auto">
                    Выберите страницу:{" "}
                </div>
                <div className="col-md-4 col-sm-4 mr-auto">
                    <select
                        ref={selectPage}
                        className="form-control mt-1"
                        onChange={() =>
                            props.onPageClicked(selectPage.current.value)
                        }
                        value={props.peoplePage.currentPage}
                    >
                        {pagesArray.map((p) => (
                            <option key={p}>{p}</option>
                        ))}
                    </select>
                </div>
                <div className="col-12">
                    <div> {peopleArray} </div>
                </div>
            </div>
        </div>
    );
};

export default People;
