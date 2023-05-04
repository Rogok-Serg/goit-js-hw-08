import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe')
const player = new Player(iframe);

const onPlay = function(data) {
  player.getCurrentTime()
    .then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds)})
    .catch(function (error) { }
    );
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function (seconds) { })
  .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
  });
console.log(localStorage.getItem("videoplayer-current-time"))