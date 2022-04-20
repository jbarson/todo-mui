import { useState } from 'react';
import {
  Paper,
  AppBar,
  Typography,
  Toolbar
} from '@mui/material'
import {v4 as uuid} from 'uuid'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const initialState = [
  {
    id: 1,
    title: "make todo app",
    complete: false
  }
]
function App() {
  const [todos, setTodos] = useState(initialState)
  const addTodo = e => {
    e.preventDefault()
    if (!e.target.todoTitle.value) return
    setTodos([...todos,
      {
        id: uuid(),
        title: e.target.todoTitle.value,
        complete: false
      }
    ])
    e.target.reset()
  }
  const deleteTodo = id => {
    setTodos(
      todos.filter(item => item.id !== id)
    )
  }
  const completeTodo = id => {
    const newTodoList = todos.map(item => {
      if (item.id === id){
        return {...item, complete: !item.complete}
      }
      return item
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <Paper
        elevation={0}
      >
        <AppBar
          color="primary"
          position='static'
        >
          <Toolbar>
            <Typography
              variant="h4"
            >
              My amazing todo app!!!
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
      </Paper>
    </>
  );
}

export default App;
