let tg = window.Telegram.WebApp;
tg.expand()
let test = document.getElementById("zal");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

test.appendChild(p)
