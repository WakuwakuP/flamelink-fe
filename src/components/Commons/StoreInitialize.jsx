import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import { withRouter } from 'react-router-dom';

class StoreInitialize extends React.Component {
  componentDidMount() {
    const stories = JSON.parse(localStorage.getItem('stories'));
    const sortedStories = JSON.parse(localStorage.getItem('sortedStories'));

    if (stories) {
      this.props.actions.setStories(stories);
    }
    if (sortedStories) {
      this.props.actions.setSortedStories(sortedStories);
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreInitialize)
);
