import { FC } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

// const Todos: FC<{ items: string[] }> = (props) => {
const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item}>{item}</li>
        // <li key={item.id}>{item.text}</li>
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
