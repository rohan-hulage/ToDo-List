import React from 'react';

type ToDoItemProps = {
  todo: { id: number; text: string; completed: boolean };
  checked: (id: number) => void;
  removeToDo: (id: number) => void;
  updateToDo: (id: number, newText: string) => void;
}

function ToDoItem(props: ToDoItemProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateToDo(props.todo.id, e.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.checked(props.todo.id)}
      />
      <input
        className="item-input"
        type="text"
        value={props.todo.text}
        onChange={handleChange}
        style={{ textDecoration: props.todo.completed ? 'line-through' : undefined }}
      />
      <button onClick={() => props.removeToDo(props.todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;