let tg = window.Telegram.WebApp;
tg.expand()
let test = document.getElementById("zal");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.id}`;

test.appendChild(p)
