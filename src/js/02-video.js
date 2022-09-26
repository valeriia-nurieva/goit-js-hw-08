import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const videoEl = document.querySelector('#vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const player = new Player(videoEl);

function onPlayData(data) {
  save(LOCALSTORAGE_KEY, data);
}

const initPage = load(LOCALSTORAGE_KEY);
player.on('timeupdate', throttle(onPlayData, 1000));

if (initPage) {
  const { seconds } = initPage;
  player.setCurrentTime(seconds);
}
