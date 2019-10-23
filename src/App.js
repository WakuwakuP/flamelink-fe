import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from './actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { When } from 'react-display-switch';
import { firebaseApp } from './firebase/index'; // eslint-disable-line no-unused-vars
import './App.css';

import NavBar from './components/Commons/NavBar';
import topPage from './components/Pages/topPage';
import storyPage from './components/Pages/storyPage';

When.case('screen_xs', () => window.innerWidth <= 480);
When.case('screen_md', () => window.innerWidth > 480 && window.innerWidth <= 1024);
When.case('screen_lg', () => window.innerWidth > 1024);

class App extends Component {
  componentDidMount() {
    this.props.actions.getStories();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/' component={topPage} />
          <Route exact path='/story/:year/:month/:day/:id' component={storyPage} />
          <Route exact component={topPage} />
        </Switch>
      </BrowserRouter>
    );
  }

  renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props);
  };
}

const mapStateToProps = (state) => {
  return {
    stories: state.data.stories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
