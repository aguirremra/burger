//
$(function() {
  $('#saveburger').on('click', function(event) {
    event.preventDefault();
    var inputBurger = $("#burger").val().trim();
    if(inputBurger != ""){
	    var newBurger = {
	      burger_name: inputBurger
	    }
	    console.log(newBurger);
	    $.post("/api/burgers", newBurger, getBurgers);
	    $("#burger").val("");
    }
  });

  $('.btndevour').on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    var newDevouredState = {
      devoured: true
    }
    //send request
		$.ajax({
		  url: '/api/burgers/' + id,
		  type: 'PUT',
		  data: newDevouredState,
		  success: function(data) {
		    console.log('Load was performed');
		  }
		});
		getBurgers();
  });

  function getBurgers() {
    $.get("/", function(data) {
      burgers = data;
    });
    location.reload();
  }
});