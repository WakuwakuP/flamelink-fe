import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

import './StoryFooter.css';

class StoryFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // NotFoundのURLを設定
  componentDidMount() {
  }

  // 前のURLに戻す
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="footer">
        {
          (() => {
            if (this.props.nextStory !== null) {
              return (
                <Link className="footer-link" to={this.props.nextStory.url}>
                  {this.props.nextStory.title}
                </Link>
              );
            } else {
              return <div className="footer-link">no Link</div>;
            }
          })()
        }
        {
          (() => {
            if (this.props.prevStory !== null) {
              return (
                <Link className="footer-link" to={this.props.prevStory.url}>
                  {this.props.prevStory.title}
                </Link>
              );
            } else {
              return <div className="footer-link">no Link</div>;
            }
          })()
        }
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextStory: state.data.nextStory,
    prevStory: state.data.prevStory,
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
)(StoryFooter);
