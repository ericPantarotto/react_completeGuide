import { createContext } from 'react';
import { TodosContextObj } from './todosContextObj';

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeTodo: (_id: string) => {},
});
