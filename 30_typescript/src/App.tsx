import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler} />
        {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
        <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      </div>
    </>
  );
}

export default App;
