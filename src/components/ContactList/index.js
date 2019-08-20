import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchContacts } from '../../actions/contactAction';
import { Link } from "react-router-dom";

class ContactList extends Component {

    componentWillMount() {
        this.props.fetchContacts();
    }

    render() {
        const { contacts } = this.props;
        if (_.size(contacts) === 0) {
            return null;
        }

        return (
                <div className="table">
                    <div className="header">
                        <div className="id-column">Id</div>
                        <div className="title-column">Title</div>
                        <div className="title-column">Detail</div>
                    </div>
                    {
                        contacts.map(function (item, i) {
                            return (<div className="content-row">
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.detail}</div>
                                </div>)
                        })
                    }
                </div>
    );
    }

}

const displayTitleLink = (title, Id) => {
    return (<Link to={"/contractor/" + Id}>{title}</Link>)
};

const mappedData = (data) => {
    return _.map(data, (value, key) => {
        return {
            id: key,
            name: displayTitleLink(value.name, key),
            detail: value.detail,
        }
    })
};

const mapStateToProps = state => {
    console.log('--state--');
    console.log(state);
    return {
        contacts: mappedData(state.contacts.data),
        isFetching: state.contacts.isFetching,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
