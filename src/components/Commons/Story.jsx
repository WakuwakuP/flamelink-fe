import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import { withRouter } from 'react-router-dom';

import './Story.css';

class Story extends React.Component {
  constructor(props) {
    const date = new Date(props.story.date);
    super(props);
    this.state = {
      story: props.story,
      yaer: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      style: {
        width: props.width,
      },
    };
  }

  handleToStoryPage = () => {
    this.props.actions.setStory(this.state.story.id);
    this.props.history.push(`/story/${this.state.yaer}/${this.state.month}/${this.state.day}/${this.state.story.id}`)
  }
  // componentの初期化時
  componentDidMount() {
  }

  // componentを離れる時
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="card"
        style={
          {
            width: this.state.style.width,
          }
        }
      >
        <div className="card-box" onClick={this.handleToStoryPage}>
          <img
            className="card-content-image"
            src={this.state.story.thumbnail[0].url}
            alt={this.state.story.title}
          />
          <div className="card-content-title">
            <div className="title-box">
              <div className="card-title">{this.state.story.title}</div>
              <div className="card-category">
                {
                  this.state.story.category.name || this.state.story.category
                    .map(category => category.name)
                    .reduce((category1, category2) => `${category1}, ${category2}`)
                }
              </div>
              {/* <div className="card-author">by {this.state.story.author.displayName}</div> */}
            </div>
          </div>
        </div>
      </div >
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Story)
);
