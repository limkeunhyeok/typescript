interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return `Hello! ${person.firstname} ${person.lastname}!`;
}

let user = {
  firstname: "Jane",
  lastname: "user",
}

console.log(greeter(user));