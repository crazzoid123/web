let tg = window.Telegram.WebApp;
let test = document.getElementById("zal");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
