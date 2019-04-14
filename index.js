function makeCounter() {
    var currentCount = 0;

    function counter() {
        return ++currentCount;
    }
    counter.set = function (value) {
        var value = prompt("Set Number", '');
        value = isNaN(value) ? 0 : value;
        return currentCount = value;

    };

    counter.reset = function () {
        currentCount = 0;
        return "counter reseted";
    };
    return counter;
}

var counter = makeCounter();

function Menu(elem) {
    this.count = function () {
        document.getElementById("my").innerHTML = counter();

    };
    this.reset = function () {
        document.getElementById("my").innerHTML = counter.reset();
    };
    this.set = function () {
        document.getElementById("my").innerHTML = counter.set();

    };

    var self = this;


    elem.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action) {
            self[action]();
            console.log("capturing" + '', action);

        }
    };
}

new Menu(menu);

