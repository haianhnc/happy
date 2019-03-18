import React, { Component } from 'react';
import PropTypes from 'prop-types';

import banner from '../images/banner.jpg'

class FirstFeatureBanner extends Component {
  static PropTypes = {
    first_feature_banner: PropTypes.object.isRequired
  };

  static defaultProps = {
    first_feature_banner: {image: "", text: "" }
  };

  render(){
    let image = this.props.first_feature_banner.image;
    let text = this.props.first_feature_banner.text;

    return(
        <div>
          <img className="pickup_image" src={banner} height="85" width="125" />
          <div className="pickup_content">{text}</div>
        </div>
      );
  }
}

export default FirstFeatureBanner;