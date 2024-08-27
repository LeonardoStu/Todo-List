import { useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Acs')

  const addTodo = (text, category) => {
    const newTodo = [...todo, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]

    setTodo(newTodo)
  }

  const removeTodo = (id) => {
    const newTodo = [...todo]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id ? todo : null)

    setTodo(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodo = [...todo]
    newTodo.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)

    setTodo(newTodo)
  }

  return (
    <div className='app'>

      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todo
        .filter((todo) => filter === 'All' ? todo : filter === "Complete" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/> 
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
