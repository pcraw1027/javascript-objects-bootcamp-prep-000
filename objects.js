var playlist = {Slowdive: "Alison"}

var key 
var value 

function updatePlaylist (playlist,key,value) {
  playlist[key] = value
}


// key = "Slowdive"
function removeFromPlaylist(playlist,key) {
  key = "Slowdive"
  // console.log(key)
  delete playlist.slowdive;
  return playlist
}