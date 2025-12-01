// 1. Callback (old way)
fs.readFile("file.txt", (err, data) => {})


// 2. Promise (modern foundation)
fetch(url).then()

// 3. Async / Await (high-level syntax)
async function run(){
    let result = await fetch('https://api.example.com/data');
    let data = await result.json();
    console.log(data);
}