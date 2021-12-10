import Link from 'next/link';
import Layout from '../components/Layout';
import { TodoList } from '../components';
import { sampleTodoList } from "../utils/sample-data";
import {useDispatch, useSelector} from 'react-redux';
const Todo = () => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.todos);
  return <Layout title="Todo">
    <TodoList items = {list} 
          dispatch = {dispatch}
          onChange = {() => {}}
        />
  </Layout>
};

export default Todo;
