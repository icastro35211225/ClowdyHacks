(function(d, m){
	var kommunicateSettings = 
		{"appId":"35063c33936dda46d9c6836243547940a","popupWidget":true,"automaticChatOpenOnNavigation":true};
	var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
	s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
	var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
	window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});