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