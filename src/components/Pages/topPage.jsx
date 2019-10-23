import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import { When } from 'react-display-switch';
import Story from '../Commons/Story';

class topPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentの初期化時
  componentDidMount() {
  }

  // componentを離れる時
  componentWillUnmount() {
  }

  render() {
    return (
      <div
        style={
          {
            display: 'flex',
            flexWrap: 'wrap',
            paddingTop: 15,
            paddingLeft: 15,
          }
        }
      >
        <When screen_xs>
          {
            this.props.sortedStories.map(
              (story, index) => {
                return (
                  <Story key={index} story={story} width="100%" />
                );
              }
            )
          }
        </When>
        <When screen_md>
          {
            this.props.sortedStories.map(
              (story, index) => {
                return (
                  <Story key={index} story={story} width="50%" />
                );
              }
            )
          }
        </When>
        <When screen_lg>
          {
            this.props.sortedStories.map(
              (story, index) => {
                return (
                  <Story key={index} story={story} width="33%" />
                );
              }
            )
          }
        </When>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortedStories: state.data.sortedStories,
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
)(topPage);
