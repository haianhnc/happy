import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabLink, TabContent } from './tabs';

import left_menu from '../images/left_menu.png'
import close_button from '../images/close_button.png'

class Header extends Component {
  static PropTypes = {
    circle_unit: PropTypes.object.isRequired
  };

  static defaultProps = {
    circle_unit: {icon: "", content: "" }
  };

  render(){
    let header_title = this.props.header.title;
    let menu_lists = this.props.header.menu_list;
    let rows = [];

    menu_lists.forEach(function(tab, key){
      rows.push(<li key={key}><a href="#"><TabLink to={tab}>{tab}</TabLink></a></li>);
    });

    return(
      <div className="header">
        <div className="menu">
          <img className="img_left" src={left_menu}/>
          <h111>{ header_title }</h111>
          <img  className="img_right" src={close_button} />
        </div>
        <div className="bar">
          <Tabs><ul>{rows}</ul></Tabs>
        </div>
      </div>
      );
  }
}

export default Header;