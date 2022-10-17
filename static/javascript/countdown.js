var deadline = new Date("Oct 24, 2022 00:00:00");
var countDownDate = deadline.getTime();

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Adds 0 in front
function getDigit(number) {
    var str = number.toString()
    if (str.length < 2) {
        var str = "0" + str
    }
    return str
}

// Countdown code. Refreshes every second
var x = setInterval(function () {
    // Tanggal hari ini
    var today = new Date()
    var now = today.getTime();
    var todayDate = today.getDate();
    var targetDate = deadline.getDate();
    var daysLeft = 0;

    var monthsLeft = Math.abs(deadline.getMonth() - today.getMonth());
    var daysInMonth = getDaysInMonth(today.getMonth() + 1, 2022);

    daysLeft = daysInMonth - todayDate;

    // Jarak ke tanggal countdown
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days.toString().length > 2) {
        document.getElementById("month").innerHTML = getDigit(monthsLeft);
        document.getElementById("day").innerHTML = getDigit(daysLeft);
        document.getElementById("hour").innerHTML = getDigit(hours);
        document.getElementById("minute").innerHTML = getDigit(minutes);
    }
    else {
        document.getElementById("label_month").innerHTML = "Day";
        document.getElementById("label_day").innerHTML = "Hour";
        document.getElementById("label_hour").innerHTML = "Minute";
        document.getElementById("label_minute").innerHTML = "Second";

        if (distance < 0) {
            document.getElementById("month").innerHTML = getDigit(0);
            document.getElementById("day").innerHTML = getDigit(0);
            document.getElementById("hour").innerHTML = getDigit(0);
            document.getElementById("minute").innerHTML = getDigit(0);
            clearInterval(x);
        }
        else {
            document.getElementById("month").innerHTML = getDigit(days);
            document.getElementById("day").innerHTML = getDigit(hours);
            document.getElementById("hour").innerHTML = getDigit(minutes);
            document.getElementById("minute").innerHTML = getDigit(seconds);
        }
    }
}, 1000)
