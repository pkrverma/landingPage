var countDownDate = new Date("Jan 31, 2024 12:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Event Over";
    }
}, 1000);

function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                callback(element);
                observer.disconnect();
            }
        });
    }).observe(element);
    if (!callback) return new Promise(r => callback = r);
}

onVisible(document.querySelector("#event"), () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            now = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                now += increment;
                obj.textContent = now;
                if (now == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 15, 2000);
    counter("count2", 0, 2, 2000);
    counter("count3", 0, 8, 2000);
    counter("count4", 0, 5, 2000);
});