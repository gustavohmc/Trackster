var Trackster = {};
const API_KEY = "69b7732e3b4c582cf241cfdbca22ade9";

$(document).ready(function(){
  $("#search-button").click(function(){
    Trackster.searchTracksByTitle($("#search-input").val());
  });
});




/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

  var $songList = $('#song-list');

  $songList.empty();

  for (var i=0; i<tracks.length; i++){

    var track = tracks[i];
    var mediumAlbumArt = track.image[1]['#text'];
    var songHTML =
    '<div class="row song-row">' +
    '  <div class="col-xs-1 play-button">' +
    '    <a href="'+ track.url + '" target="blank"><i class="fa fa-play-circle-o fa-2x"></i></a>' +
    '  </div>' +
    '  <div class="col-xs-4 song-text">' + track.name + '</div>' +
    '  <div class="col-xs-2 song-text">' + track.artist + '</div>' +
    '  <div class="col-xs-2"><img src="' + mediumAlbumArt + '"/></div>' +
    '  <div class="col-xs-2 song-text">' + track.listeners + '</div>' +
    '</div>';

    $songList.append(songHTML);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};
