import { List, Paper } from '@mui/material'
import TodoItem from './TodoItem'

function TodoList({todos, deleteTodo, completeTodo}) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          ))}
      </List>
    </Paper>
  )
}

export default TodoList