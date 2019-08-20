import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner'
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addContact } from '../../actions/contactAction';
import {Link} from "react-router-dom";

class ContactForm extends Component {
    state = {
        showForm: false,
        name: '',
        detail: '',
    };

    inputChange = (e, formName) => {
        this.setState({
            [formName] : e.target.value
        });
    };

    formSubmit = (e) => {
        const { name, detail } = this.state;
        console.log('this.state');
        console.log(this.state);
        console.log('name : ' + name);
        console.log('detail : ' + detail);
        const { addContact } = this.props;
        e.preventDefault();
        addContact({
            name: name,
            detail: detail
        });
        ReactGA.event({
            category: 'Contact',
            action: 'Create an Contact'
        });

        this.setState({name: '', detail: ''});
    };

    renderForm = () => {
        const { name, detail } = this.state;
            return (
                <div>
                    <form onSubmit={this.formSubmit}>
                        <div>
                            <i>Name :</i>
                            <input value={name} onChange={(e) => this.inputChange(e,'name')} id='name' type='text' />
                        </div>
                        <br/>
                        <div>
                            <i>Detail :</i>
                            <input value={detail} onChange={(e) => this.inputChange(e,'detail')} id='detail' type='text' />
                        </div>
                        <div><Button type="submit">Submit</Button></div>
                    </form>
                </div>
            );
    };

    render() {
        return (<div>
                <div>{this.renderForm()}</div>
            </div>);
    }

}

const mapStateToProps = state => {
    return {
        isFetching: state.todos.isFetching,
    };
};

const mapDispatchToProps = dispatch => ({
    addContact: (item) => dispatch(addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
