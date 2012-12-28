// init para media-embedd
$(function(){
  $.mb_audioEmbedder.playerPath="./assets/media/player.swf" //the path to audio player
  $.mb_videoEmbedder.defaults.width=500; //the with of players --> the height is automatically calculated
  $('#media').mb_embedMovies();
  $('#media').mb_mb_embedAudio();  
});

  $('.fadeIn').hide().fadeIn('fast');


/*
    [vimeo=http://www.vimeo.com/numero]
    [youtube=http://www.youtube.com/watch?v=numero]
    [flickr=http://www.flickr.com/photos/danielofredorota/numero/]
    [livestream=http://www.livestream.com/fox8news]
    [ustream=http://www.ustream.tv/recorded/numero]
    [audio=http://dl.dropbox.com/u/1976976/linea_gialla.mp3&titles=linea gialla]
*/