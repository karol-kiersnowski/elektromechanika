function markAnchor() {	
	var articles = document.getElementsByTagName("section");
	var articlesTop = new Array(articles.length);
	var articlesBottom = new Array(articles.length);
	var anchors = new Array(articles.length);

	for (var i=0; i<articles.length; i++) {
		articlesTop[i] = articles[i].getBoundingClientRect().top;
		articlesBottom[i] = articles[i].getBoundingClientRect().bottom;
		anchors[i] = document.querySelector("a[href='#" + articles[i].id + "']");
		anchors[i].style.borderBottom = "2px solid rgba(255,255,255,0)";
		if (articlesTop[i] <= 5 && articlesBottom[i] > 5)
			anchors[i].style.borderBottom = "2px solid rgb(26, 54, 101)";
	}
}

function initMap() {
  var mapCanvas = document.getElementById("map");
  var mapCenter = new google.maps.LatLng(52.7582866, 23.1860516);
  var mapOptions = { center: mapCenter, zoom: 15 };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker( { position: mapCenter } );
  marker.setMap(map);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length)
  	slideIndex = 1;
  if (n < 1)
  	slideIndex = slides.length;
  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";
  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");
  slides[slideIndex-1].style.display = "block";
}














//document.getElementById("demo").innerHTML = articlesTop[2] + " \t " + articlesBottom[2];
	/*var articles = new Array(4);
	var articlesTop = new Array(4);
	var articlesBottom = new Array(4);
	var anchors = new Array(4);
	articles[0] = document.getElementById("o-firmie");
	articles[1] = document.getElementById("sklep");
	articles[2] = document.getElementById("warsztat");
	articles[3] = document.getElementById("kontakt");
	articlesTop[0] = articles[0].getBoundingClientRect().top;
	articlesTop[1] = articles[1].getBoundingClientRect().top;
	articlesTop[2] = articles[2].getBoundingClientRect().top;
	articlesTop[3] = articles[3].getBoundingClientRect().top;
	articlesBottom[0] = articles[0].getBoundingClientRect().bottom;
	articlesBottom[1] = articles[1].getBoundingClientRect().bottom;
	articlesBottom[2] = articles[2].getBoundingClientRect().bottom;
	articlesBottom[3] = articles[3].getBoundingClientRect().bottom;
	anchors[0] =  document.querySelector("a[href='#o-firmie']");
	anchors[1] =  document.querySelector("a[href='#sklep']");
	anchors[2] =  document.querySelector("a[href='#warsztat']");
	anchors[3] =  document.querySelector("a[href='#kontakt']");

	if (articlesTop[0] <= 5 && articlesBottom[0] > 5)
	{
		anchors[0].style.borderBottom = "2px  solid rgb(26, 54, 101)";
		anchors[1].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[2].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[3].style.borderBottom = "2px  solid rgba(255,255,255,0)";
	}
	else if (articlesTop[1] <= 5 && articlesBottom[1] > 5)
	{
		anchors[0].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[1].style.borderBottom = "2px  solid rgb(26, 54, 101)";
		anchors[2].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[3].style.borderBottom = "2px  solid rgba(255,255,255,0)";
	}
	else if (articlesTop[2] <= 5 && articlesBottom[2] > 5)
	{
		anchors[0].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[1].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[2].style.borderBottom = "2px  solid rgb(26, 54, 101)";
		anchors[3].style.borderBottom = "2px  solid rgba(255,255,255,0)";
	}
	else if (articlesTop[3] <= 5 && articlesBottom[3] > 5)
	{
		anchors[0].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[1].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[2].style.borderBottom = "2px  solid rgba(255,255,255,0)";
		anchors[3].style.borderBottom = "2px  solid rgb(26, 54, 101)";
	}*/