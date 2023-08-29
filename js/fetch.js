fetch('https://jsonplaceholder.typicode.com/todos/100')
      .then(response => response.json()) //.json is not similar but close to JSON.parse
      .then(json => console.log(json))

function loadData1 (){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //.json is not similar but close to JSON.parse
      .then(data => console.log(data))
}