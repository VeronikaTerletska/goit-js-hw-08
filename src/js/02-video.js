import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(timePlay, 10000));

function timePlay({ seconds }) {
  localStorage.setItem('LOCAL_STORAGE_KEY', seconds);
}

function initPage() {
  let saveData = localStorage.getItem('LOCAL_STORAGE_KEY');
  if (saveData) {
    player.setCurrentTime(saveData);
  }
}
initPage();
