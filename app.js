let tg = window.Telegram.WebApp;
tg.expand();

let encodedString = tg.initData;
document.write(encodedString);
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let item = 'test'; // Add "let" keyword to properly declare the variable.

tg.MainButton.setText('Like');
tg.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function() {
  tg.sendData(item);
});
