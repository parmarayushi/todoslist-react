import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let id, initTodo;

  localStorage.getItem("todos") === null ? initTodo = [] : initTodo = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    setTodos(todos.filter((res) => {
      return res !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    todos.length === 0 ? id = 0 : id = todos[todos.length - 1].id + 1
    const myTodo = {
      id: id,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
