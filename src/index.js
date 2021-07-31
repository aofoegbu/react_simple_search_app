import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const libraries = [
  { name: 'Backbone.js', url: 'backbonejs.io'},
  { name: 'AngularJS', url: 'angular.io'},
  { name: 'jQuery', url: 'jquery.org'},
  { name: 'Prototype', url: 'prototype.io'},
  { name: 'React', url: 'reactjs.org'},
  { name: 'Ember', url: 'ember.io'},
  { name: 'Knockout.js', url: 'knockoutjs.io'},
  { name: 'Dojo', url: 'dojo.io'},
  { name: 'Monotools', url: 'monotools.org'},
  { name: 'Underscore', url: 'underscore.io'},
  { name: 'Lodash', url: 'lodash.io'},
  { name: 'Moment', url: 'moment.io'},
  { name: 'Express', url: 'express.org'},
  { name: 'Koa', url: 'koa.io'}
]
ReactDOM.render(
    <App libraries={libraries}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
