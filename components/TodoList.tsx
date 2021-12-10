import { Box } from '@material-ui/core';
import * as React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../interfaces';

type Props = {
  items: Todo[],
  onChange:Function,
  dispatch: Function
}

const TodoList = ({ items, onChange, dispatch }: Props) => (
  <Box>
    {items.map((item) => (
        <TodoItem 
          key = {item?.id}
          dispatch = {dispatch}
          item = {item}
          onChange = {onChange}
          />
    ))}
  </Box>
)

export default TodoList;
