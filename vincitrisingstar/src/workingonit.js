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
/*
make an array  if the next part is down than add the previous to array until the next one is bigger then last onabort

like list price -1 > price now add to array. until price -1 < price now

make multiple arrays like this and compare length of the arrays. Print the longest array in a graph for down 

the other way for up. 

For the 3 assignment get lowest price of given range and highest price. Print out the date for the lowest price as go there for a time machine to buy and highest time to sell

Time stamp backwards to usw dates as label

*/

/*Maybe this could be a way to deal with the arrays*/

//Going through those loops

array.forEach(element => {
  
});

//After this maybe use if and while to create an array of the longest down spiral in data

Array ar = new Array[][];

Array previous index = index -1;

while(array[] < arr[])
  array[index] = arr[];
if(array[previous index] > Arr[index])
break;

//also use a condition to check arrays for how long they are compared to each other.

//More ideas to find the longest down and up

function streak(arr) {
  var i,
      temp,
      streak,
      length = arr.length,
      highestStreak = 0;

  for(i = 0; i < length; i++) {
      // check the value of the current entry against the last
      if(temp != '' && temp == arr[i]) {
          // it's a match
          streak++;
      } else {
          // it's not a match, start streak from 1
          streak = 1;
      }

      // set current letter for next time
      temp = arr[i];

      // set the master streak var
      if(streak > highestStreak) {
          highestStreak = streak;
      }
  }

  return highestStreak;
}

var array = [2,5,3,1,1,1,3,7,9,6,4,1,1,1,1,1,4,7,2,3,1,1,4,3];

console.log(streak(array)); // 5


