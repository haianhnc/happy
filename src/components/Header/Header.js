import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import {configureStore} from '../../stores/index';

import left_menu from '../images/left_menu.png'
import close_button from '../images/close_button.png'

export class Header extends Component {
  constructor(){
    debugger;
    super();
    var HEADER = {title: 'Happy', menu_list: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'], left_menu_button: 'left_menu.png', close_button: 'close_button.png', active_tab: 0}
    const store = configureStore();
    store.dispatch(actions.setHeader(HEADER));
  }

  static PropTypes = {
    header: PropTypes.object.isRequired
  };

  static defaultProps = {
    header: {title: "", menu_lists: [] }
  };

  render(){
    debugger;
    let header = this.props.header;
    let header_title = header.title;
    let menu_lists = header.menu_list;
    let onClick = this.props.onClick;
    let rows = [];

    menu_lists.forEach(function(tab, key){
      rows.push(<li key={key}>
        <a 
          href="#"
          onClick={onClick(key)}
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