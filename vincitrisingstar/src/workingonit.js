const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");

let url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	console.log("text");
  //console.log(response);
  console.log(start.value);

}
//This is for a unix timestamp that needs to be send
let ts = Math.round((new Date()).getTime() / 1000);

/*
<label>Start date:</label>
<input type="date" id="start" value="">
<br />
<label>End date:</label>
<input type="date" id="end" value="">
<br />

<button id="submit" >
  longest down
</button>
*/


//newer code here

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");
let startDate = new Date();

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	console.log("text");
  //console.log(response);
  console.log(start.value);
  startDate = start.value;
  console.log(startDate);
  
  let ts = startDate.getMilliseconds();
  console.log(ts);

}


//more new stuff

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	let startDate = new Date(start);

	console.log("text");
  //console.log(response);
  console.log(start.value);
  startDate = start.value;
  console.log(startDate.getMonth());
  
  //console.log(startDate.getMilliseconds());

}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	let startDate = new Date(start.value);

	console.log("text");
  //console.log(response);
  console.log(start.value);
  //startDate = start.value;
  console.log(startDate.getDay());
  
  //console.log(startDate.getMilliseconds());

}

//version with unix timestamp

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");
const end = document.getElementById("end");

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	let startDate = new Date(start.value);
  let endDate = new Date(end.value);

	console.log("text");
  //console.log(response);
  console.log(start.value);
  //startDate = start.value;
  console.log(startDate.getDate());
  console.log(endDate.getDate());
  
  let ts = Math.round(startDate.getTime() / 1000); 
  let tt = Math.round(endDate.getTime() / 1000);
  
  console.log(ts);
  console.log(tt);
  
  //console.log(startDate.getMilliseconds());

}

//working version that gets data within date range

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", logi);
const start = document.getElementById("start");
const end = document.getElementById("end");

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232";

async function getData(url){

 const response = await fetch(url);
 let data = await response.json();
 console.log(data);

}

getData(url);

function logi() {

	let startDate = new Date(start.value);
  let endDate = new Date(end.value);

	console.log("text");
  //console.log(response);
  console.log(start.value);
  //startDate = start.value;
  console.log(startDate.getDate());
  console.log(endDate.getDate());
  
  let ts = Math.round(startDate.getTime() / 1000); 
  let tt = Math.round(endDate.getTime() / 1000);
  
  console.log(ts);
  console.log(tt);
  
  let url2 =   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd" + "&from=" + ts + "&to=" + tt;  
  
  getData(url2);
  
  //console.log(startDate.getMilliseconds());

}
/*
<label>Start date:</label>
<input type="date" id="start" value="">
<br />
<label>End date:</label>
<input type="date" id="end" value="">
<br />

<button id="submit" >
  longest down
</button>*/

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>

let graphs = new Chart(mychart, {
  type: "bar",
  data: {da},
  options: {}
});
