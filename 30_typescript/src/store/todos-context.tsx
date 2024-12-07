// import { FC, useState, createContext, PropsWithChildren } from 'react';
import { FC, PropsWithChildren, useState } from 'react';
import { TodosContext } from './todos-ctx';

import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// export const TodosContext = createContext<TodosContextObj>({
//   items: [],
//   addTodo: () => {},
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   removeTodo: (id: string) => {},
// });

const TodosContextProvider: FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
