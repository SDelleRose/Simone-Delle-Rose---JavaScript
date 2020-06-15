
input.focus();


if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(mostraPosizione);
}
function mostraPosizione(position) {
  const apiKey = '1ae190f5618ce49be0259aa70f30fd3a';
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let urlCoordinates= 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid='+apiKey+'&lang=it';
  const richiesta0= new XMLHttpRequest();
  richiesta0.open('GET', urlCoordinates);
  richiesta0.send();

  richiesta0.onload = function() {
    let dati= JSON.parse(this.response);
		let ora= new Date();
		ora=ora.getHours()+':'+ora.getMinutes();
	  let temp= dati.main.temp;
		temp= Math.round(temp);
    let città= dati.name;
    let min= dati.main.temp_min;
		min= Math.floor(min);
		let max= dati.main.temp_max;
		max= Math.ceil(max);
		let iconaId = dati['weather'][0]['icon'];
		let icona=document.createElement('img');
		icona.src ='http://openweathermap.org/img/wn/'+ iconaId +'@2x.png';
		//let orario = new Date(dati.dt + dati.timezone * 1000);
		let direzione=Math.round(dati.wind.deg);
		if ((direzione >= 337) || (direzione <= 22)){
			direzione='nord';
		} else if ((direzione>22)&&(direzione<=67)){
			direzione='nord est';
		} else if ((direzione>67)&&(direzione<=112)){
			direzione='est';
		} else if ((direzione>112)&&(direzione<=157)){
			direzione='sud est';
		} else if ((direzione>157)&&(direzione<=202)){
			direzione='sud';
		} else if ((direzione>202)&&(direzione<=247)){
			direzione='sud ovest';
		} else if ((direzione>247)&&(direzione<=292)){
			direzione='ovest';
		} else if ((direzione>292)&&(direzione<337)){
			direzione='nord ovest';
		} else {
			direzione= '-';
		}
		;
    if (dati.weather[0].main==='Thunderstorm'){
			document.getElementById('page').style.backgroundImage= "url('images/thunderstorm.jpg')";
		} else if (dati.weather[0].main=== 'Drizzle'){
			document.getElementById('page').style.backgroundImage= "url('images/drizzle.jpg')";
		} else if (dati.weather[0].main=== 'Rain'){
			document.getElementById('page').style.backgroundImage= "url('images/rain.jpg')";
		} else if (dati.weather[0].main=== 'Snow'){
			document.getElementById('page').style.backgroundImage= "url('images/snow.jpg')";
		} else if (dati.weather[0].icon=== '50d'){
			document.getElementById('page').style.backgroundImage= "url('images/atmosphere.jpg')";
		} else if (dati.weather[0].main=== 'Clear'){
			document.getElementById('page').style.backgroundImage= "url('images/clear.jpg')";
		} else if (dati.weather[0].main=== 'Clouds'){
			document.getElementById('page').style.backgroundImage= "url('images/clouds.jpg')";
		} else {
			document.getElementById('page').style.backgroundImage= "url('images/clear.jpg')";
		};



		document.getElementById('città').innerHTML=città;
	  document.getElementById('time').innerHTML=ora;
		document.getElementById('umidità').innerHTML=dati.main.humidity+'%';
		document.getElementById('icona').innerHTML='';
		document.getElementById('icona').appendChild(icona);
		document.getElementById('descrizione').innerHTML=dati['weather'][0]['description'];
		document.getElementById('temp').innerHTML=temp+'°';
		document.getElementById('min').innerHTML=min+'°';
		document.getElementById('max').innerHTML=max+'°';
		document.getElementById('vento').innerHTML= direzione + '<br>' + parseInt(dati.wind.speed*3.6)+' km/h';







   }


}

cerca.onclick = function () {
  const apiKey = '1ae190f5618ce49be0259aa70f30fd3a';
  let città= document.getElementById('input').value;
  let url= 'http://api.openweathermap.org/data/2.5/weather?q='+città+'&units=metric&appid='+apiKey+'&lang=it';
  const richiesta= new XMLHttpRequest();
  richiesta.open('GET', url);
  richiesta.send();


  richiesta.onload = function() {
   if(richiesta.status >= 200 && richiesta.status <400){
    let dati= JSON.parse(this.response);
		let ora= new Date();
		ora=ora.getHours()+':'+ora.getMinutes();
    let temp= dati.main.temp;
		temp= Math.round(temp);
    let min= dati.main.temp_min;
		min= Math.floor(min);
		let max= dati.main.temp_max;
		max= Math.ceil(max);
		let iconaId = dati['weather'][0]['icon'];
		let icona=document.createElement('img');
		icona.src ='http://openweathermap.org/img/wn/'+ iconaId +'@2x.png';

		let direzione=Math.round(dati.wind.deg);
		if ((direzione >= 337) || (direzione <= 22)){
			direzione='nord';
		} else if ((direzione>22)&&(direzione<=67)){
			direzione='nord est';
		} else if ((direzione>67)&&(direzione<=112)){
			direzione='est';
		} else if ((direzione>112)&&(direzione<=157)){
			direzione='sud est';
		} else if ((direzione>157)&&(direzione<=202)){
			direzione='sud';
		} else if ((direzione>202)&&(direzione<=247)){
			direzione='sud ovest';
		} else if ((direzione>247)&&(direzione<=292)){
			direzione='ovest';
		} else if ((direzione>292)&&(direzione<337)){
			direzione='nord ovest';
		} else {
			direzione= '-';
		};

		if (dati.weather[0].main=== 'Thunderstorm'){
			document.getElementById('page').style.backgroundImage= "url('images/thunderstorm.jpg')";
		} else if (dati.weather[0].main=== 'Drizzle'){
			document.getElementById('page').style.backgroundImage= "url('images/drizzle.jpg')";
		} else if (dati.weather[0].main=== 'Rain'){
			document.getElementById('page').style.backgroundImage= "url('images/rain.jpg')";
		} else if (dati.weather[0].main=== 'Snow'){
			document.getElementById('page').style.backgroundImage= "url('images/snow.jpg')";
		} else if (dati.weather[0].icon=== '50d'){
			document.getElementById('page').style.backgroundImage= "url('images/atmosphere.jpg')";
		} else if (dati.weather[0].main=== 'Clear'){
			document.getElementById('page').style.backgroundImage= "url('images/clear.jpg')";
		} else if (dati.weather[0].main=== 'Clouds'){
			document.getElementById('page').style.backgroundImage= "url('images/clouds.jpg')";
		} else {
			document.getElementById('page').style.backgroundImage= "url('images/clear.jpg')";
		};

   	document.getElementById('città').innerHTML=città;
	 	//document.getElementById('orario').innerHTML=dati.timezone;
	 	document.getElementById('umidità').innerHTML=dati.main.humidity+'%';
		document.getElementById('time').innerHTML=ora;
	 	document.getElementById('icona').innerHTML='';
		document.getElementById('icona').appendChild(icona);
		document.getElementById('descrizione').innerHTML=dati['weather'][0]['description'];
		document.getElementById('temp').innerHTML=temp+'°';
		document.getElementById('min').innerHTML=min+'°';
		document.getElementById('max').innerHTML=max+'°';
		document.getElementById('vento').innerHTML=direzione + '<br>' +parseInt(dati.wind.speed*3.6)+' km/h';
    document.getElementById('input').value='';
		input.style='border:none;'

 }else if(richiesta.status ===404){
	 input.style='border:1px solid red;'
 };
};
};
