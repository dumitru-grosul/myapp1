var deviceHeading, deviceName, deviceVersion;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log('onLoad');
	navigator.compass.getCurrentHeading(
		function(heading){
			deviceHeading = heading;
		},
		function(){
			deviceHeading = 'Not defined';
		}
	);
	deviceName = window.device.name;
	deviceVersion = window.device.version;
}


function doStuff(){
	alert('Device Heading: ' + deviceHeading);
	alert('Device Name: ' + deviceName);
}