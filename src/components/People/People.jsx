import "./PersonProfile.css";

import { NavLink } from "react-router-dom";
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

    let peopleArray = props.peoplePage.people.map((person) => {
        return (
            <PersonProfile
                id={person.id}
                name={person.name}
                status={person.status}
                image={person.photos.large}
                followed={person.followed}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        );
    });

    let selectPage = React.createRef();

    return (
        <div className="col-9">
            <div>
                <select
                    ref={selectPage}
                    class="form-control mt-1"
                    onChange={() => props.onPageClicked(selectPage.current.value)}
                    value={props.peoplePage.currentPage}
                >
                    {pagesArray.map((p) =>  <option>{p}</option>)}
                </select>
            </div>
            <div> {peopleArray} </div>
        </div>
    );
};

export default People;
