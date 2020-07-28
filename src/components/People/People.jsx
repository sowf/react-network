import PersonProfile from "./PersonProfile";
import React from "react";

const People = (props) => {
  if (props.peoplePage.people.length === 0) {
    props.addPeople([
      {
        id: 1,
        name: "Вася1",
        location: { country: "Russia", city: "Moscow" },
        followed: true,
      },
      {
        id: 2,
        name: "Вася2",
        location: { country: "Russia", city: "Moscow" },
        followed: false,
      },
      {
        id: 3,
        name: "Вася3",
        location: { country: "Russia", city: "Moscow" },
        followed: false,
      },
      {
        id: 4,
        name: "Вася4",
        location: { country: "Russia", city: "Moscow" },
        followed: true,
      },
      {
        id: 5,
        name: "Вася5",
        location: { country: "Russia", city: "Moscow" },
        followed: true,
      },
    ]);
  }

  let peopleArray = props.peoplePage.people.map((person) => {
    return (
      <PersonProfile
        id={person.id}
        name={person.name}
        city={person.location.city}
        coutry={person.location.coutry}
        followed={person.followed}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });

  return <div className="col-9">{peopleArray}</div>;
};

export default People;
