import {
    follow,
    isFetching,
    setCountPeople,
    setCurrentPage,
    setPeople,
    unfollow,
} from "../../redux/peopleReducer";

import Axios from "axios";
import People from "./People";
import { Preloader } from "../preloader";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PeopleAPIComponent extends React.Component {
    componentDidMount() {
        this.props.isFetching(true);
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.peoplePage.currentPage}&count=${this.props.peoplePage.pageSize}`,
            {
                headers: {
                    "API-KEY": "aac71a96-ea21-4187-aca1-6ee0cb0d5ac1",
                },
            }
        ).then((response) => {
            this.props.isFetching(false);
            this.props.setPeople(response.data.items);
            this.props.setCountPeople(response.data.totalCount);
        });
    }

    onPageClicked = (page) => {
        this.props.isFetching(true);
        this.props.setCurrentPage(page);
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.peoplePage.pageSize}`,
            {
                headers: {
                    "API-KEY": "aac71a96-ea21-4187-aca1-6ee0cb0d5ac1",
                },
            }
        ).then((response) => {
            this.props.isFetching(false);
            this.props.setPeople(response.data.items);
        });
    };

    render() {
        return (
            <>
            {this.props.peoplePage.isFetching ?
            <Preloader /> :
            <People
                    peoplePage={this.props.peoplePage}
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
        peoplePage: state.peoplePage,
    };
};

const PeopleContainer = connect(mapStateToProps, {
    setPeople,
    setCurrentPage,
    follow,
    unfollow,
    setCountPeople,
    isFetching,
})(PeopleAPIComponent);

export default PeopleContainer;
