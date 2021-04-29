import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import Unmute from './plugins/Unmute.js';

const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins: [
        new AutoPlay(),
    ]    
});

const buttonPlay = document.querySelector("#play")
const buttonMute = document.querySelector("#mute")
buttonPlay.onclick = () => player.togglePlay();

let valueMute = new Unmute()
buttonMute.onclick = () => player.toggleMute(valueMute);