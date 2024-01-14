// ES6+ Promises

function display(data){
    console.log(data)
}

const futureData = fetch('https://www.google.com')
futureData.then(display);
// console.log(futureData);
console.log("Me first");

// But we need to know how our promise-deferred functionality gets back into JavaScript to be run

function dsply(data){console.log(data)}
function printHello(){console.log("Hello");}

function blockFor300ms(){/*block js thread for 300ms*/}


setTimeout(printHello,0);

const furtureData = fetch('https//www.google.com')

furtureData.then(display)

blockFor300ms()
console.log("Me First");