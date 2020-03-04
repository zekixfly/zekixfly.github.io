var LanguageCatch = function() {

		var BrowserLanguage = "";
		if(navigator.languages) {
			BrowserLanguage = navigator.languages[0];
		}
		else {
			BrowserLanguage = (navigator.language || navigator.userLanguage);
		}
		BrowserLanguage = BrowserLanguage.toLowerCase();
		if( BrowserLanguage == "zh-tw" ) {
			return 'chinese';
		}
		else {
			return 'english';
		}
	};




var message = {};
if ( LanguageCatch() == "chinese" ) {
	message = chineseTxt();
}
else {
	message = englishTxt();
}

getId('footer-r').dataBind(message);



	