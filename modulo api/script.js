const myUser = fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));