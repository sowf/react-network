import {
    follow,
    getUsers,
    isFetching,
    setCountPeople,
    setCurrentPage,
    setPeople,
    toggleIsFollowing,
    unfollow
} from "../../redux/peopleReducer";

import People from "./People";
import { Preloader } from "../Preloader";
import React from "react";
import { connect } from "react-redux";
import {
    getPeoplePage
} from "../../redux/peopleSelector"

class PeopleAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.peoplePage.currentPage, this.props.peoplePage.pageSize)
    }

    onPageClicked = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.peoplePage.pageSize)
    }

    render() {
        return (
            <>
            {this.props.peoplePage.isFetching ?
            <Preloader /> :
            <People
                    peoplePage={this.props.peoplePage}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageClicked={this.onPageClicked}
                />
            }
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        peoplePage: getPeoplePage(state)
    };
};

const PeopleContainer = connect(mapStateToProps, {
    setPeople,
    setCurrentPage,
    follow,
    unfollow,
    setCountPeople,
    isFetching,
    toggleIsFollowing,
    getUsers
})(PeopleAPIComponent);

export default PeopleContainer;
