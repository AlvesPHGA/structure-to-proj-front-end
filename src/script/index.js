// import _ from 'lodash';
import printMe from './modules/print.js';

console.log('>> Hello Pug!');

const element = document.querySelector('button');

element.addEventListener('click', printMe);
