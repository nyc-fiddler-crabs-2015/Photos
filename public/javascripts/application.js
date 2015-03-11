// Javascript Goes Here~
//

$(document).ready(function(){

  $('#logIn').on('click', function(event){
    event.preventDefault();

    $.ajax({
    url:'/login',
    type: 'GET',
    success: function(response){
      $("#index_page").html(response);
    },
    error: function(response){
      alert("This is an error");
    },
   });
  });

$('#signUp').on('click', function(event){
    event.preventDefault();


    $.ajax({
    url:'/signup',
    type: 'GET',
    success: function(response){
      $("#index_page").html(response);
    },
    error: function(response){
      alert("This is an error");
    },
   });
 });

$('#signUp').on('click', function(event){
    event.preventDefault();


    $.ajax({
    url:'/signup',
    type: 'GET',
    success: function(response){
      $("#index_page").html(response);
    },
    error: function(response){
      alert("This is an error");
    },
   });
 });

$('#logInForm').on('submit', function(event){
    event.preventDefault();
    var target = $(event.target);
    console.log(target);

    $.ajax({
    url:'/login.json',
    data: target.serialize(),
    dataType: 'JSON',
    type: 'POST',
    success: function(response){
      window.location.replace(response.url);
    },
    error: function(response){
      alert(response);
    },
   });
 });


});


function Photo(params){
  this.name = params.name;
  this.photo_url = params.photo_url;
}
