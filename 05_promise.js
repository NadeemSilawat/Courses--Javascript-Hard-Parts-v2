// ES6+ Promises

function display(data){
    console.log(data)
}

const futureData = fetch('https://in.linkedin.com/in/nadeem-silawat-560987274')
futureData.then(display);

console.log("Me first");