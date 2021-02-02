var playlist = {Slowdive: "Alison"}

var key 
var value 

function updatePlaylist (playlist,key,value) {
  playlist[key] = value
}



function removeFromPlaylist(playlist,key) {
  delete playlist.key[1];
  return playlist
}