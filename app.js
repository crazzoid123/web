let tg = window.Telegram.WebApp;
tg.expand();

let encodedString = tg.initData;
document.write(encodedString);
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let item = ''; // Add "let" keyword to properly declare the variable.

tg.MainButton.enable();
tg.MainButton.setText('like')
tg.MainButton.show();
btn1.addEventListener('click', function() {  
    item = 'like1';
  }
});
btn2.addEventListener('click', function() {
    item = 'like2';
  }
});
btn3.addEventListener('click', function() {
    item = 'like3';
  }
});
// Correct the function definition below and remove the extra closing parenthesis after 'mainButtonClicked'
Telegram.WebApp.onEvent('mainButtonClicked', function() {
  tg.sendData(item);
});
