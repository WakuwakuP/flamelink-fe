import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={monokaiSublime}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
