;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");
	// Set default data
	Greatskin.data = {
		logCount: 0
	};
	Greatskin.log = function(msg) {
		try {
			if (this.data.logCount > 200) {
				console.clear();
				this.data.logCount = 0;
			}
			if (msg.toString().trim() === 'true') {
				console.log('%c' + msg,'background-color: green; color: #fff;');
			}
			else if (msg.toString().trim() === 'false') {
				console.log('%c' + msg,'background-color: red; color: #fff;');
			}
			else {
				console.log(msg);
			}
			this.data.logCount++;
		}
		catch(err) {
			//send error to developer platform
		}
	};
	Greatskin.init = function() {

	};

	Greatskin.init();

	// Make sure that module is exposed to window
	window.Greatskin = Greatskin;
})(window, window.document);


