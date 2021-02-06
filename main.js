console.log("Hey Connection!");


function bisection(eqn, a, b, dp) {
    mid = (a + b) / 2;
    x = mid;
    value = eval(eqn);
    value = parseFloat(value.toFixed(2));
    console.log(`a=${a}, b=${b}, mid=${mid}`);
    console.log(value);
}

bisection("(x**3)-(3*x)+1.06", 0, 1);

function doSomething(event) {
    console.log(event);
    alert(`You pressed: ${event.textContent}`);
}