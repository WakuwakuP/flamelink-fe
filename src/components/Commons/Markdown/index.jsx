import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../../actions';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './CodeBlock';
import ImageBlock from './ImageBlock';
import HtmlBlock from './HtmlBlock';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
    };
  }

  render() {
    return (
      <ReactMarkdown
        source={this.state.source}
        escapeHtml={false}
        renderers={{ code: CodeBlock, image: ImageBlock, html: HtmlBlock }}
      />
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
)(Markdown);
