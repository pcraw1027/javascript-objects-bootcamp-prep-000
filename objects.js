var playlist = {Slowdive: "Sometimes"}

var key 
var value 

function updatePlaylist (playlist,key,value) {
  playlist[key] = value
}



function removeFromPlaylist(playlist,key) {
  delete playlist.key
  return playlist
}