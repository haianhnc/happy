import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import {configureStore} from '../../stores/index';

import left_menu from '../images/left_menu.png'
import close_button from '../images/close_button.png'

export class Header extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    debugger;
    let onLoad = this.props.onLoad;
    onLoad();
  }

  static PropTypes = {
    header: PropTypes.object.isRequired
  };

  static defaultProps = {
    header: {title: "", menu_lists: [] }
  };

  render(){
    let header = this.props.header;

    if(header == "")
      return(<div></div>);

    let header_title = header.title;
    let menu_lists = header.menu_list;
    let onClick = this.props.onClick;

    let rows = [];

    menu_lists.forEach(function(tab, key){
      rows.push(<li key={key}>
        <a 
          href="#"
          onClick={e => {
           e.preventDefault()
           onClick(key)
         }}
        >{tab}</a></li>);
    });

    return(
    <div className="header">
      <div className="menu">
        <img className="img_left" src={left_menu}/>
        <h111>{ header_title }</h111>
        <img  className="img_right" src={close_button} />
      </div>
      <div className="bar">
        <ul>{rows}</ul>
      </div>
    </div>
    );

  }
}