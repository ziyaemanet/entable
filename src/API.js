import ServerActions from './actions/ServerActions';
import EntableActions from './actions/EntableActions';
import axios from 'axios';
const io = require('socket.io-client');

console.log('IN API');
var socket = io();
socket.on('banks', function(data) {
  console.log('DATA: ', data);
  // ServerActions.recieveStream(data);
});

const API = {


};

export default API;
