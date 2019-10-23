import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import ReactMarkdown from 'react-markdown';
import './storyPage.css';

import { Container } from '@material-ui/core';

class storyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // NotFoundのURLを設定
  componentDidMount() {
    this.props.actions.setStory(this.props.match.params.id);
  }

  // 前のURLに戻す
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Container fixed>
          {
            this.props.story.thumbnail[0].url !== '' ?
              <img
                className="thumbnail"
                src={this.props.story.thumbnail[0].url}
                alt={this.props.story.title !== '' ? this.props.story.title : ''}
              /> :
              ''
          }
          {
            this.props.story.title !== '' ?
              <h1 className="title">{this.props.story.title}</h1> :
              ''
          }
          {
            this.props.story.author.displayName !== '' ?
              <div className="author">by {this.props.story.author.displayName}</div> :
              ''
          }

          {
            this.props.story.category.name !== '' ?
              (
                <div className="category">
                  {
                    this.props.story.category.name || this.props.story.category
                      .map(category => category.name)
                      .reduce((category1, category2) => `${category1}, ${category2}`)
                  }
                </div>
              ) :
              ''
          }
          {
            this.props.story.content !== '' ?
              <ReactMarkdown source={this.props.story.content} /> :
              ''
          }
        </Container>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.data.story,
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
