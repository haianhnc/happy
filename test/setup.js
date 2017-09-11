import React from 'react';
import {expect} from 'chai';
import jsdom from 'jsdom';


const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;



// const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;

global.document = document;
global.window = window;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;