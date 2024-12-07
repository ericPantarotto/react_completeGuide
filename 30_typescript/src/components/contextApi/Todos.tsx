import { FC, useContext } from 'react';
import { TodosContext } from '../../store/todos-ctx';
import TodoItem from '../TodoItem';
import classes from '../Todos.module.css';

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
