import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const videoEl = document.querySelector('#vimeo-player');
const LOCALE_STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(videoEl);

initPage();
    
const onPlay = function(data) {
    save(LOCALE_STORAGE_KEY, data);
};

const throttledOnTimeUpdate = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnTimeUpdate)

function initPage() {
    const saveData = load(LOCALE_STORAGE_KEY);
    const { seconds } = saveData;
  if (!saveData) {
    return;
  }
    player.setCurrentTime(seconds);
}

