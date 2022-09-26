import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const videoEl = document.querySelector('#vimeo-player');
const LOCALE_STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(videoEl);

initPage();

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }

  player.setCurrentTime(saveData.seconds);

  const onPlay = function (data) {
    save(LOCALE_STORAGE_KEY, data);
  };
  player.on('timeupdate', throttle(onPlay, 1000));
}
