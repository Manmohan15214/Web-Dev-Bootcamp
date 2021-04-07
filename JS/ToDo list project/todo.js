let input = prompt('What do you want to do?');
let todo = [];

while (input !== 'quit' && input !== 'q') {

  if (input === 'list') {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1} : ${todo[i]}`);
    }
  }

  else if (input === 'new') {
    const newTodo = prompt('What do you want to add?');
    todo.push(newTodo);
    console.log(`Added ${newTodo} to the list`);
  }

  else if (input === 'delete') {
    const deleteTodo = prompt('Which todo do you want to delete?');
    todo.splice(deleteTodo - 1, 1);
    console.log(`Delete todo : ${deleteTodo}`);
  }

  input = prompt('What do you want to do?');

}

if (input === 'quit' || input === 'q') {
  console.log('Okay, You Quit!');
}
