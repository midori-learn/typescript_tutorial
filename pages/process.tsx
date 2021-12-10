import Link from 'next/link';
import Layout from '../components/Layout';
import { TodoList } from '../components';
import { sampleTodoList } from "../utils/sample-data";

const Process = () => (
  <Layout title="Process">
    <TodoList
      items ={sampleTodoList}
    />
  </Layout>
);

export default Process;
