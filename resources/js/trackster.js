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

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
      console.log(JSON.parse(http.response));
    }
  }

  http.open("GET", "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json", true);
  http.send();
};
