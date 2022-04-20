import {
  Card,
  Grid,
  TextField,
  Button,
} from '@mui/material'

function AddToDo({addTodo}) {
  return (
    <form onSubmit={addTodo}>
      <Card
        elevation={4}
        style={{margin: 16, padding: 16}}
      >
        <Grid container={true}>
          <Grid item md={11}>
            <TextField
              label="Add To Do"
              fullWidth
              name="todoTitle"
              variant="standard"
            />

          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >Add</Button>
          </Grid>
        </Grid>
      </Card>
    </form>
  )
}

export default AddToDo