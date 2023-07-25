let tg = window.Telegram.WebApp;
tg.expand();

let encodedString = tg.initData;
document.write(encodedString);
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let item = ''; // Add "let" keyword to properly declare the variable.
btn1.addEventListener('click', function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Liked');
    item = 'like';
    tg.MainButton.show();
  }
});
btn2.addEventListener('click', function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Liked');
    item = 'like';
    tg.MainButton.show();
  }
});
btn3.addEventListener('click', function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Liked');
    item = 'like';
    tg.MainButton.show();
  }
});
// Correct the function definition below and remove the extra closing parenthesis after 'mainButtonClicked'
Telegram.WebApp.onEvent('mainButtonClicked', function() {
  tg.sendData(item);
});
Telegram.WebApp.onEvent('backButtonClicked', function() {
  tg.sendData(item);
});
