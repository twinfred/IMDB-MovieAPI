$(document).ready(function(){
    for(var i = 1; i<=802; i++) {
        console.log(i);
        $('body').append('<img src="http://pokeapi.co/media/sprites/pokemon/'+i+'.png" alt="pokemon number '+i+'">');
    }
})