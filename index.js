(function (global) {
  var TimeConvert = (function () {
    function TimeConvert() {}

    TimeConvert.prototype.sec2min = function (time) {
      var min = Math.floor(time / 60);
      var sec = time % 60;

      return {
        min: min,
        sec: sec
      }
    }

    TimeConvert.prototype.min2hour = function (time) {
      var hour = Math.floor(time / 60);
      var min = time % 60;

      return {
        hour: hour,
        min:min
      }
    }

    TimeConvert.prototype.sec2hour = function (time) {
      var sec = (time % 60) % 60;
      var min = Math.floor(time / 60) % 60;
      var hour = Math.floor(time / 3600);

      return {
        hour: hour,
        min: min,
        sec: sec
      }
    }

    return TimeConvert;
  })();

  global.TimeConvert = TimeConvert;
}(this));

window.onload = function () {
  var timeConvert = new TimeConvert();
  var result = document.getElementById('result');
  var buttons = document.getElementsByTagName('button');
  var button;
  for (var i=0; i<buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('click', function () {
      var time = document.getElementById('time').value;
      var method = this.id;
      switch (method) {
        case 'sec2min':
          result.innerText = JSON.stringify(timeConvert.sec2min(time));
          break;
        case 'min2hour':
          result.innerText = JSON.stringify(timeConvert.min2hour(time));
          break;
        case 'sec2hour':
          result.innerText = JSON.stringify(timeConvert.sec2hour(time));
          break;
      }


    });
  }
}
