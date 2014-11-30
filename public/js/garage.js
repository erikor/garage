$(function() {
  $('#opener').click(function(e) {
     $(this).css('background', '#1E1F33');
     $(this).css('color', '#444444');
     $.ajax({
     	type: 'GET',
     	url: '/click',
     	success: function(data) {
     		$('#messages').html(data);
     	}
     });
     var self = this;

    setTimeout(function() {
    	$(self).css('background', '');
  	    $(self).css('color', '');
	}, 700);
  });
});