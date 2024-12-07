import { FC, MouseEvent } from 'react';
import classes from './TodoItem.module.css';

// NOTE: we actually don't use the event
const TodoItem: FC<{
  text: string;
  onRemoveTodo: (event: MouseEvent) => void; 
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
