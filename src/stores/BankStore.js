import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _banks = [];

class EntableStore extends EventEmitter {
  constructor () {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        default:
          console.log('INVALID_ACTION_TYPE');
          break;
      }
    });
  }

  startListening(callback) {
    this.on('CHANGE', callback);
  }

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  }

  getBanks(){
    return _banks;
  }
}

export default new EntableStore();
