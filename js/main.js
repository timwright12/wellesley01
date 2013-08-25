$(document).ready(function() {

    $.getJSON("http://api.cbssports.com/fantasy/league/teams?access_token=$access_token&response" function(data) {

            teams = data.body,

            $('#output').empty();

           	$('#output').append('<p>teams</p>');

              
    }); // end getJson call
}); // dom ready close​