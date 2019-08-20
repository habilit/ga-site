import React, { Component } from 'react';
import _ from 'lodash';

class ContactDetail extends Component {
    componentDidMount() {

    }

    render() {
        const { match : { params } } = this.props;
        const contactId = _.get(params , ['contactId'], null);
        return (
            <div>
                <h1>Contact Detail!</h1>
                <hr/>
            {
                !_.isNil(contactId) ?
                    <div>{contactId}</div>
                :
                <div>No Detail</div>
            }
            </div>);
    }
}

export default ContactDetail;
