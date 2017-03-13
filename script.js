$(document).ready(function(){

    // var musicData = [];


              // SPLASH PAGE FUNCTIONALITY //

    $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data){
        // console.log("data: ",data.Search);
        var artists = data.results;

        for (var i = 0; i < 3; i++) {
          var artistPic = artists[Math.floor(Math.random() * artists.length)]
          // console.log(artists[Math.floor(Math.random() * artists.length)]);
          $('.col-b-right').append(`
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <img src="images/${artistPic.cover_art}">
              </div>
            </div>
            `)

          }

              // PLAYLIST PAGE FUNCTIONALITY //

          $('img').click(function(){
            var artistInfo = $(this).attr('src');
            // console.log(artistInfo);
            // console.log('images/'+artists[0].cover_art);
              for (var i = 0; i < artists.length; i++) {

                if(artistInfo === 'images/' + artists[i].cover_art){
                  $('.col-md-8').append('<div>'+ artists[i].artist + ": " +
                  artists[i].title + '</div>');
                }
              }

          })
              // EMPTYING THE BIN //

          $('#empty_tracks').click(function(){
            $('.col-md-8').empty();
          });








    }); // API Ending

                                // POST
          $('#submit_bin').click(function(){

            $.post( "https://lit-fortress-6467.herokuapp.com/post")
            .done(function() {
              alert( "success" );
            })
            .fail(function() {
              alert( "error" );
            })


          })







}) // Document Ending
