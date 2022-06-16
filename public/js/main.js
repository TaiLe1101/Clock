
function showCurrentTime() {
    var time = new Date();
    var currentHour = time.getHours();
    var currentMinute = time.getMinutes();
    var currentSecond = time.getSeconds();
    if (currentHour >= 12) {
        var currentTime = currentHour + ':' + currentMinute + ':' + currentSecond + ' PM' + '!';
    } else {
        var currentTime = currentHour + ':' + currentMinute + ':' + currentSecond + ' AM' + '!';
    }
    return currentTime;
}
var getClockElement = document.querySelector(".clock");
setInterval(function () {
    getClockElement.innerText = showCurrentTime();
}, 500)
showCurrentTime();