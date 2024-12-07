import { createContext } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeTodo: (_id: string) => {},
});
