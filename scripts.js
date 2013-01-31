localStorage.setItem('date', '123');
console.log(localStorage);
console.log(localStorage.getItem('date'));

function doStuff(){
	document.getElementById('main').innerHTML = '<object type="type/html" data="http://google.com"><\/object>';
	
}
function callme(data, status) {}

(function($) {
	$(document).ready(function() {
		$.ajax({
			type: 'GET',                                                                                                                                                                                                 
			url: 'http://api.stackoverflow.com/1.1/stats?jsonp=callme', //'http://localhost/json_tmp.txt?jsonp=callme', // 
			dataType: 'jsonp',                                                                                                                                                                                                
			success: function(data) {
				$('#hours_opened').html(data['statistics'][0]['answers_per_minute']);
				$('#gallery_info').html(data['statistics'][0]['site']['name']);
			},                                                                                                                                                                                       
			error: function() { console.log('Uh Oh!'); },
			jsonp: 'jsonp'   
		});

		return false;
	});
})(jQuery);