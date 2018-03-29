$(document).ready(function(){
    // for(var i = 1; i<=151; i++) {
    //     console.log(i);
    //     $('#pokePics').append('<img src="http://pokeapi.co/media/sprites/pokemon/'+i+'.png" alt="pokemon number '+i+'">');
    // }
    // for(var i = 1; i<=151; i++) {
    //     var pokePicCode ='';
    //     pokePicCode += '<img src="http://pokeapi.co/media/sprites/pokemon/';
    //     pokePicCode += i;
    //     pokePicCode += '.png" data-pokedexNum="'
    //     pokePicCode += i;
    //     pokePicCode += '" alt="pokemon number ';
    //     pokePicCode += i;
    //     pokePicCode += '">';
    //     $('#pokePics').append(pokePicCode);
    // }
    $('#searchBtn').click(function() {
        var movieName = $('#movieName').val();
        console.log(movieName);
        $.get('http://www.omdbapi.com/?apikey=845b8a53&t="'+movieName+'"', function(res) {
        console.log(res);
        $('#movieResults').html('<h1>'+res.Title+'</h1><h2>Released: '+res.Released+'</h2><h2>Runtime: '+res.Runtime+'</h2><h2>Rated: '+res.Rated+'</h2><h2>Actors: '+res.Actors+'</h2><h2 id="boxOffice">Box Office: '+res.BoxOffice+'</h2><h2>Director: '+res.Director+'</h2><h2>Awards: '+res.Awards+'</h2><a href="'+res.Website+'" target="_blank"><button id="movieSite">Visit Movie Website</button>');
        $('#moviePoster').html('<img src="'+res.Poster+'" alt="'+res.Title+'">')
        }, 'json')
        return false;
    })
})