window.onload = function () {
  let timer = document.getElementById("timer");
  let myText = document.getElementById("myText");
  myText.style.visibility = "hidden";

  timer.innerHTML = 10;       //start with 10 to go down till 0
  setTimeout(function () {
    timer.innerHTML = 9;
    setTimeout(function () {
      timer.innerHTML = 8;
      setTimeout(function () {
        timer.innerHTML = 7;
        setTimeout(function () {
          timer.innerHTML = 6;
          setTimeout(function () {
            timer.innerHTML = 5;
            setTimeout(function () {
              timer.innerHTML = 4;
              setTimeout(function () {
                timer.innerHTML = 3;
                setTimeout(function () {
                  timer.innerHTML = 2;
                  setTimeout(function () {
                    timer.innerHTML = 1;
                    setTimeout(function () {
                      timer.style.visibility = "hidden";
                      myText.style.visibility = "visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};