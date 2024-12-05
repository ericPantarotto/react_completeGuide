import { FC } from 'react';
import Todo from '../models/todo';

// const Todos: FC<{ items: string[] }> = (props) => {
const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item}>{item}</li>
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
