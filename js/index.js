function loadUsers2 (){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) //.json is not similar but close to JSON.parse
      .then(data => displayData2(data))
}
function displayData2 (data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerHTML = `<p>name: ${user.name} & email: ${user.email}</p>`;
        ul.appendChild(li)
        console.log('name:', user.name)
        console.log('email:', user.email)
    }
}

