type user = {
  userName: string,
  lastName: string,
  age: Number
}


const usersList: user[] = [
  {
    userName: 'David',
    lastName: 'Shelton',
    age: 22
  },
  {
    userName: 'Shelton',
    lastName: 'Cesar',
    age: 19
  },
  {
    userName: 'Maria',
    lastName: 'José',
    age: 48
  },
  {
    userName: 'Julio',
    lastName: 'Cesar',
    age: 50
  }
]

function displayUsersData(users: user[]){
  const usersContainer: HTMLElement | null = document.querySelector('.users-container');

  for (let i = 0; i < users.length; i++) {
    const userCard = document.createElement("article")
    userCard.innerHTML = `
      <h2 class="user-card-title">${users[i].userName} ${users[i].lastName}</h2>
      <p class="user-card-description">Age: ${users[i].age} years old</p>
    `

    userCard.classList.add('users-card')

    usersContainer?.appendChild(userCard);
    
  }
}

displayUsersData(usersList)
function useRef<T>(arg0: null) {
  throw new Error("Function not implemented.");
}

