let tg = window.Telegram.WebApp;
tg.expand()
let test = document.getElementById("zal");
let p = document.createElement("p");

let encodedString = tg.initData;
decodedString = decodeURIComponent(encodedString);
document.write(decodedString);
