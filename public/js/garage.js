$(function() {
  $('#opener').click(function(e) {
     $.ajax({
     	type: 'GET',
     	url: 'http://localhost:3000/click',
     	success: function(data) {
     		$('#messages').html(data);
     	}
     });
  });
});