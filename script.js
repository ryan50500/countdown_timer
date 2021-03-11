document.addEventListener("DOMContentLoaded", function() {
    let timer2 = "2:00";
    let interval = setInterval(function() {
    
      let timer = timer2.split(':');
      let minutes = parseInt(timer[0], 10);
      let seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
       if (minutes < 0) return;
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
    
      $('#countdown').html(minutes + ':' + seconds);
      timer2 = minutes + ':' + seconds;
    }, 1000);
});