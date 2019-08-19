import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { addCurrentUrltoGA } from './utils/GAutil';
import { simpleAction } from './actions/simpleAction';
import Home from './containers/Home';
import DetailPage from './containers/DetailPage';
import logo from './logo.svg';
import './App.css';
import {fetchToDos} from "./actions/todoAction";
import NavBar from './components/NavBar';

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
        this.props.fetchToDos();
    };

    componentDidMount() {
        this.initializeReactGA();
    };

    initializeReactGA = () => {
        console.log('initializeReactGA');
        ReactGA.initialize('UA-145774534-1');
        addCurrentUrltoGA();
    };

    render = () => {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/pageDetail/:itemId" component={DetailPage}/>
                </div>
            </Router>
        );
    }

}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

