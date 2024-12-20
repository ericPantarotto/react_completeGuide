import { FC } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// const Todos: FC<{ items: string[] }> = (props) => {
const Todos: FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item}>{item}</li>
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
