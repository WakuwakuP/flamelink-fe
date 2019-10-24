import React from "react";
import './HtmlBlock.css';

class HtmlBlock extends React.PureComponent {
  render() {
    console.log(this.props.value);
    
    return (
      <div className="container" dangerouslySetInnerHTML={{ __html: this.props.value }}></div>
    );
  }
}

export default HtmlBlock;
