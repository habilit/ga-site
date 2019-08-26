import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { addCurrentUrltoGA } from './utils/GAutil';
import { simpleAction } from './actions/simpleAction';
import Home from './containers/Home';
import createBrowserHistory from 'history/createBrowserHistory';
import DetailPage from './containers/DetailPage';
import ContactPage from './containers/ContactPage';
import StoryPage from './containers/StoryPage';
import ContactDetail from './containers/ContactDetail';
import './App.css';
import {fetchToDos} from "./actions/todoAction";
import NavBar from './components/NavBar';

var history = createBrowserHistory();

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
        this.props.fetchToDos();
    };

    componentDidMount() {
        this.initializeReactGA();
    };

    initializeReactGA = () => {
        console.log('initializeReactGA UA-145774534-2');
        ReactGA.initialize('UA-145774534-3');
        history.listen(function () {
            addCurrentUrltoGA();
        });
    };

    render = () => {
        return (
            <Router history={history}>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/pageDetail/:itemId" component={DetailPage} />
                    <Route path="/story" component={StoryPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/contractor/:contactId" component={ContactDetail} />
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


