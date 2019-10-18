import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

class storyPage extends React.Component {
  // NotFoundのURLを設定
  componentDidMount() {
  }

  // 前のURLに戻す
  componentWillUnmount() {
  }

  render() {
    return (
      <h3>Not Found</h3>
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storyPage);
