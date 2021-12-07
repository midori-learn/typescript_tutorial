import React from 'react';
import {Checkbox, Box} from '@material-ui/core';
import Button from './Button';

type Props = {
    isCheck: boolean,
    value: string,
}

const TodoItem = ({isCheck, value}: Props) => (
    <Box style = {{
        display: "flex",
        flexDirection: "row",
        flex:3,
        margin:10
    }}>
        <Box style = {{
            flex: 2,
            display: "flex"
        }}>
            <Checkbox 
                checked = {isCheck}
                size = "small"
            />
            <Box>{value}</Box>
        </Box>
        <Button
            backgroundColor = ""
            color = ""
            title = "Add into Process"
            onSubmit = {() => {}} 
        />
    </Box>
)

export default TodoItem;