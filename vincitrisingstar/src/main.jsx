const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const startDate = document.getElementById("start");
const endDate = document.getElementById("end");

submitButton.addEventListener("submit");
clearButton.addEventListener("clear");

//This is for a unix timestamp that needs to be send
let ts = Math.round((new Date()).getTime() / 1000);

//get request for the coingecko.com

curl -X 'GET' \
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232' \
  -H 'accept: application/json'

  //request url for the same. This seems like the actual url to use
  https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232