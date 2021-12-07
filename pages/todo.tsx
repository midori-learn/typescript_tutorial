import Link from 'next/link'
import Layout from '../components/Layout'
import {TodoList} from '../components';
import {sampleTodoList} from "../utils/sample-data";

const Todo = () => (
  <Layout title="Todo">
      <TodoList
        items ={sampleTodoList}
      />
  </Layout>
)

export default Todo;
