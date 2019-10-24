import React from "react";
import PropTypes from "prop-types";

class ImageBlock extends React.PureComponent {
  static propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    alt: 'image'
  };

  render() {
    const { src, alt } = this.props;
    return (
      <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
    );
  }
}

export default ImageBlock;
