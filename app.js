'use strict';

var search_term;


/*SET SEARCH REQUEST BY TYPE*/
//Grab vale of serach query when button is clicked and store in "search_term" var
$(function(){
  $('.philosopher').click(function(event){
    event.preventDefault();
    search_term = $(this).attr('data-value');
    showResults(search_term);
  });

  $('.movement').click(function(event){
    event.preventDefault();
    search_term = $(this).attr('data-value');
    showResults(search_term);
  });

  $('.tropes').click(function(event){
    event.preventDefault();
    search_term = $(this).attr('data-value');
    showResults(search_term);
  });
}); //doc ready end

//Render search query to search-results div by changing the src attribute of the <iframe>
function showResults (search_term) {
  //Build search query string
  var url = 'http://plato.stanford.edu/entries/adorno/' + search_term + '/';
  $('.search-results').attr('src', url);
    /*make unwanted elements disappear $('#seach-form').html('');*/
    /*HT add reading times to articles*/
}

//Change search query string for fallback
