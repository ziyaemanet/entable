import ServerActions from './actions/ServerActions';
import EntableActions from './actions/EntableActions';
import axios from 'axios';
const io = require('socket.io-client');

console.log('IN API');
var socket = io();
socket.on('banks', function(data) {
  console.log('SOCKET IO BANKS: ', data);
  ServerActions.updateBanks(data);
});

const API = {
  getAll() {
    console.log('INSIDE GET ALL');
    axios.get('/api/tropo')
      .then((res) => {
        console.log('API CALL BANKS', res);
        ServerActions.updateBanks(res.data);
      })
      .catch(console.error);
  },

  fund(transaction) {
    axios.post('/api/tropo/fund', transaction)
      .catch(console.error);
  },

  subscribe(email) {
    axios.post('/api/email', email)
      .catch(console.error);
  },
};

export default API;
