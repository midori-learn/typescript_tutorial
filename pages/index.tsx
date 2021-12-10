import React, {useState} from 'react';
import Layout from '../components/Layout'
import {Box, ButtonBase, fade, Fade, InputBase} from '@material-ui/core'
import {TodoList} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {handleAddTodo} from '../utils/handleCRUD';

const IndexPage = () => {
  const list= useSelector((state) => state.todos)
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  console.log(list);

  return <Layout title="Todo List TypeScript">
      <Box style = {{
        margin: 10,
        borderBottom: "1px solid gray"
      }}>

        <Box style = {{justifyContent:'center', alignItems: "center", width: '100vw'}}>
          <InputBase
            placeholder = "Input new todo ..."
            style = {{
              border: "0.5px solid gray",
              borderRadius: 4,
              fontSize:14,
              padding:5,
              backgroundColor: fade("#3a3a3a", 0.1),
            }}
            value = {title}
            onChange = {(event) => setTitle(event.target.value)}
          />
          <ButtonBase onClick = {() => handleAddTodo(dispatch, list.length+1, title)}
            style = {{
              backgroundColor: "blue",
              color: "#fff",
              width: 90,
              padding: "12.5px 5px",
              borderRadius:4,
              marginLeft: 10
            }}
          >Add</ButtonBase>
        </Box>
        
        <Box style = {{
          display: "flex",
          flex:3
        }}>
          <Box style = {{flex:1}}>
              <Box style = {{
              padding:5,
              fontWeight: "bold",
              margin: "0 10px",
              borderBottom: "2px solid gray",
            }}>Todo</Box>
            <TodoList items = {list} 
              dispatch = {dispatch}
              onChange = {() => {}}
            />
          </Box>
          <Box style ={{flex:1, borderLeft: "1px solid gray"}}>
              <Box style = {{
              padding:5,
              fontWeight: "bold"
            }}>Process</Box>
            {/* list process */}
          </Box>
          <Box style ={{flex:1, borderLeft: "1px solid gray"}}>
              <Box style = {{
              padding:5,
              fontWeight: "bold"
            }}>Done</Box>
            {/* list process */}
          </Box>
        </Box>
      </Box>
    </Layout>
}

export default IndexPage
