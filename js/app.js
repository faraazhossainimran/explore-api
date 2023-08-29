function loadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/100')
      .then(response => response.json()) //.json is not similar but close to JSON.parse
      .then(data => displayUsers(data))
}

function displayUsers(user){
    console.log(user);
}