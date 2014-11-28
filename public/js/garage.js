$(function() {
  $('#opener').click(function(e) {
     $.ajax({
     	type: 'GET',
     	url: '/click',
     	success: function(data) {
     		$('#messages').html(data);
     	}
     });
  });
});