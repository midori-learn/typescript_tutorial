import React from 'react';
import {Checkbox, Box, ButtonBase} from '@material-ui/core';
import Button from './Button';
import {handleUpdateTodo, handleDeleteTodo} from '../utils/handleCRUD';
import { Todo } from '../interfaces'; 
import EditModal from './EditModal';
import {DeleteSharp} from '@material-ui/icons';
type Props = {
    item: Todo,
    onChange: Function,
    dispatch: Function
}

const TodoItem = ({item, onChange, dispatch}: Props) => (
    <Box style = {{
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
        width: '100%'
    }}>
        <Box style = {{
            display: "flex",
            alignItems:'center'
        }}>
           {/* <ButtonBase onClick = {() => {}}>
               Edit
            </ButtonBase> */}
            <Checkbox 
                checked = {item.checked}
                size = "medium"
            />
            <Box style = {{
                justifyContent: 'center',
                alignItems:'center',
                width:120
            }}>{item.title}</Box>
            <ButtonBase style = {{
                marginRight: 10,
                padding:5,
                backgroundColor: 'lightblue',
                borderRadius:4
            }}>
                Add in Process
            </ButtonBase>
            <ButtonBase 
                onClick = {() => handleDeleteTodo(dispatch, item.id)}
                style = {{
                    marginRight: 5
                }}
            >
                <DeleteSharp fontSize = "small"/>
            </ButtonBase>
        </Box>
    </Box>
)

export default TodoItem;