function Unmute() { }

Unmute.prototype.run = function (player) {
    player.toggleMute();
}

export default Unmute;