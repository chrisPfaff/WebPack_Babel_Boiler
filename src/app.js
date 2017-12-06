import { person, dog } from './lib';


//console.log(person);
//console.log(`${dog.name} loves ${person.name}`)

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();

  return data;
}

getUsers().then(users => console.log(users[0].name));
