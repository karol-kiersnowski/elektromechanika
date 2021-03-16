function markAnchor() { 
	var articles = new Array(5);
	articles[0] = document.getElementById("o-firmie");
	articles[1] = document.getElementById("sklep");
	articles[2] = document.getElementById("warsztat");
	articles[3] = document.getElementById("mapa");
	articles[4] = document.getElementById("kontakt");
	var articlesTop = new Array(articles.length);
	var articlesBottom = new Array(articles.length);
	var anchors = new Array(articles.length);

	for (var i=0; i<articles.length; i++) {
		articlesTop[i] = articles[i].getBoundingClientRect().top;
		articlesBottom[i] = articles[i].getBoundingClientRect().bottom;
		anchors[i] = document.querySelector("a[href='#" + articles[i].id + "']");
		anchors[i].style.borderTop = "3px solid rgba(255,255,255,0)";
		if (articlesTop[i] <= 5 && articlesBottom[i] > 5)
			anchors[i].style.borderTop = "3px solid rgb(255,255,255)";
	}
}

// OpenStreetMap - Leaflet
//////////////////////////

function initMap() {
	document.getElementById("map-content").style.backgroundImage = "none";

	var map = L.map('map-content', {
		center: [52.7582866, 23.1860516],
		zoom: 16,
		scrollWheelZoom: false,
		touchZoom: true,
		dragging: !L.Browser.mobile,
		tap: !L.Browser.mobile
	});

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	map.scrollWheelZoom.disable();

	L.marker([52.7582866, 23.1860516]).addTo(map).bindPopup("Elektromechanika Krzysztof Kiersnowski<br>ul. Sportowa 14<br>17-100 Bielsk Podlaski<br><a target='_blank' href='https://www.openstreetmap.org/#map=16/52.7583/23.1861&layers=N'>52.7582866, 23.1860516</a>");
}

/*function initGoogleMap() {
	var mapCanvas = document.getElementById("map-content");
	var mapCenter = new google.maps.LatLng(52.7582866, 23.1860516);
	var mapOptions = { center: mapCenter, zoom: 15, mapTypeId: google.maps.MapTypeId.HYBRID };
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker( { position: mapCenter } );
	marker.setMap(map);
}*/