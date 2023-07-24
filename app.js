let tg = window.Telegram.WebApp;
tg.expand()
let test = document.getElementById("zal");
let p = document.createElement("p");

let encodedString = tg.initData;
decodedString = decodeURIComponent(encodedString);
document.write(decodedString);
document.write(tg.initDataUnsafe.query_id);
document.write(tg.initDataUnsafe.user.first_name);
