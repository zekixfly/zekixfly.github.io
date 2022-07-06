//Test Api: https://cnodejs.org/api/v1/topics
(function(ZekiAjax){
	
	ZekiAjax.ajax = function ajax({type = 'get', url = undefined, ok = function(){console.log('Ok funtion not defiend.')}, error = function(){'Error funtion not defiend.'}, postDataType='application/x-www-from-urlencoded; charset=UTF8' , postData = null} = {}) {
	var request = null;

	if(url!=undefined) {

		ZekiAjax.ok = ok;
		ZekiAjax.error = error;
		//Chrome, FireFox
		if(window.XMLHttpRequest) {
			try {
				request = new XMLHttpRequest();
			}
			catch(err) {
				console.log(err);
				request = null;
			}
		}
		//IE
		else if(window.ActiveXObject) {
			try {
				request = new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}
			//old IE
			catch(err) {
				console.log(err);
				try {
					request = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(err) {			
					console.log(err);
					request = null;
				}
			}
		}


		if(request!= null) {
			// delete ths previous request.
			request.abort();

			url += "?dummy=" + new Date().getTime();

			try {				
				request.onreadystatechange = callback;
				request.open(type, url, true);// Third argument is asynchronous's boolean value.
				if(type.toLowerCase() == "get") {
					//if type as get that It don't need send data.
					request.send(null)
				}
				else {
					// if type as post that It need data to send.
					request.setRequestHeader("Content-type", postDataType);
					request.send(postData);
				}


			} catch(e) {
				
				console.log("Ajax error communiction whith the server.\n"+ "Details: " + e);
			}
		}
	}



	function callback(event) {
			if(event.target.readyState == 4 && event.target.status == 200) {
				console.log('readyState 4: request finished and response is ready.');
				// console.log(event);
				var response = JSON.parse(event.target.response);
				ok(response);
			}
			else {
				switch (event.target.status) {
					
					case 200:
						console.log("status 200: OK.");
						switch (event.target.readyState) {
							case 0:
								console.log("readyState 0: request not initialized.");
								break;
							case 1:
								console.log("readyState 1: server connection established.");
								break;
							case 2:
								console.log("readyState 2: request received.");
								break;
							case 3:
								console.log("readyState 3: processing request.");
								break;
							default:
								// statements_def
								break;
						}
						break;
					case 403:
						console.log("Error 403: Forbidden.");
						break;
					case 404:
						console.log("Error 404: Page not found.");
						break;
					default:

						// console.log("Error " + event.target.status);
						break;
				}
				

				
			}


	}

	}

	// }



	// function callback(event) {
	// 	if(event.target.response.success == true) {
	// 	 return event.target.response
	// 	}		
	// }



})(Window.prototype);




