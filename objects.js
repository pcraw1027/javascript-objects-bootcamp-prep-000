var playlist = {Slowdive: "Alison"}

var key 
var value 

function updatePlaylist (playlist,key,value) {
  playlist[key] = value
}


// key = "Slowdive"
function removeFromPlaylist() {
 // key = "Slowdive"
  delete playlist.Slowdive;
  return playlist
}