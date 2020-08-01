import {
    followRequest,
    getUsers,
    isFetching,
    setCountPeople,
    setCurrentPage,
    setPeople,
    unfollowRequest
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
                    followRequest={this.props.followRequest}
                    unfollowRequest={this.props.unfollowRequest}
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
    followRequest,
    setCountPeople,
    isFetching,
    getUsers,
    unfollowRequest
})(PeopleAPIComponent);

export default PeopleContainer;
