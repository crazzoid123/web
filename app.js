let tg = window.Telegram.WebApp;
tg.expand()
let test = document.getElementById("zal");
let p = document.createElement("p");

let encodedString = tg.initData;
document.write(encodedString);
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText('Like');
    item = 'like';
    tg.MainButton.show();
  }
});

