import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  const addToDo = (text: string) => {
    const newToDo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  };

  const checked = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeToDo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateToDo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} checked={checked} removeToDo={removeToDo} updateToDo={updateToDo} />
      <Footer />
    </div>
  );
}

export default App;