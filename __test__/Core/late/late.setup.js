import window from '../../__utilities__/dom';
import { states } from '../../../src/index';

states.create('visibilitychange');

var lastTime = 0;
window.requestAnimationFrame = function (callback) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = setTimeout(function () {
    callback(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

window.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
