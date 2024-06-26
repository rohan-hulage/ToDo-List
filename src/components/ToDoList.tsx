import React from 'react';
import ToDoItem from './ToDoItem';

type ToDoListProps = {
  todos: { id: number; text: string; completed: boolean }[];
  checked: (id: number) => void;
  removeToDo: (id: number) => void;
  updateToDo: (id: number, newText: string) => void;
}

function ToDoList(props: ToDoListProps) {
  return (
    <ul>
      {props.todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          checked={props.checked}
          removeToDo={props.removeToDo}
          updateToDo={props.updateToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;