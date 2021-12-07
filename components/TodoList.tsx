import { Box } from '@material-ui/core';
import * as React from 'react'
import TodoItem from './TodoItem'
// import { User } from '../interfaces'

type Props = {
  items: string[]
}

const TodoList = ({ items }: Props) => (
  <Box style = {{
    width: "50vw"
  }}>
    {items.map((item, index) => (
        <TodoItem 
          isCheck = {true}
          value={item} />
    ))}
  </Box>
)

export default TodoList;
