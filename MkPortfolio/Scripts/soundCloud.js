$(document).ready(function() {
  // initialization
  SC.initialize({
    client_id: "6fea8aec46bdedd037166aae11b78de0"
  });

  // Play audio
  $("#embedTrack").on('click touch', function() {
    var player = $("#music-player");
    SC.oEmbed('https://soundcloud.com/user1821913/dj-mistahvince-urbanhiphop-vol', {
      maxheight: 100
    }, function(res) {
      $("#music-player").html(res.html);
    });
  });
});