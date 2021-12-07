import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout'
import {Box, ButtonBase, InputBase} from '@material-ui/core'
import styles from '../styles';
import {InputTodo, Button, TodoList} from '../components';
import { sampleTodoList } from '../utils/sample-data';

const IndexPage = () => (
  <Layout title="Todo List TypeScript">
    <Box style = {{
      justifyContent: "center",
      alignItems: "center"
    }}>
      <InputTodo
        text = ""
        onChange = {() => {}}
      />
      <TodoList items = {sampleTodoList} />
    </Box>
  </Layout>
)

export default IndexPage
