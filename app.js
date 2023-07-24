let tg = window.Telegram.WebApp;
tg.expand();

let encodedString = tg.initData;
document.write(encodedString);

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let item = ''; // Add "let" keyword to properly declare the variable.

btn1.addEventListener('click', function() {
  document.write('lol');
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Like');
    item = 'like';
    tg.MainButton.show();
  }
});

// Correct the function definition below and remove the extra closing parenthesis after 'mainButtonClicked'
Telegram.WebApp.onEvent('mainButtonClicked', function() {
  tg.sendData(item);
});
