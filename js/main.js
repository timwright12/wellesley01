$(document).ready(function() {

    var $access_token = '[your token here]';
    var teams;
  
    $.getJSON("http://api.cbssports.com/fantasy/league/teams?access_token=" + $access_token + "&response" function(data) {

            teams = data.body;

            $('#output').empty();

           	$('#output').append('<p>' + teams + '</p>');

              
    }); // end getJson call
}); // dom ready close​