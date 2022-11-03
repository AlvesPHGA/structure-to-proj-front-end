// import _ from 'lodash';
import './style/style.scss';
import printMe from './script/modules/print.js';

const element = document.querySelector('button');

element.addEventListener('click', printMe);
