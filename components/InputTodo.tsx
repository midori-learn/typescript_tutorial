import React, {useState} from 'react';
import {Box, InputBase, ButtonBase} from '@material-ui/core';
import Button from './Button'

type Props = {
    value: string,
    onChange: () => {}
    onSubmit: () => {}
}

const InputTodo = ({value, onChange, onSubmit, ...other }: Props) => {
    const [title, setTitle] = useState<string>("")
    return <Box>
                <Box style = {{
                    display: "flex",
                    marginLeft: 10
                }}>
                    <Box>Todo</Box>
                    <Box>Deadline</Box>
                </Box>

                <Box style = {{
                    display: "flex"
                }}>
                <InputBase
                placeholder = "Insert new todo here..."
                type = {value}
                onChange = {onChange}
                style = {{
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color:"black",
                    width: 200,
                    borderRadius:8
                }}
                {...other}
                />
                <Box
                    style = {{
                        border: "1px solid gray",
                        backgroundColor: "gray",
                        width: "fit-content",
                        padding: 10,
                        borderRadius:8
                    }}
                >dropdown deadline
                </Box>
                <ButtonBase
        style = {{
            minWidth: 80,
            padding: 10,
            backgroundColor:"blue",
            color: "#fff",
            borderRadius: 8
        }}
        onSubmit = {onSubmit}
        {...other}
    >
        {title}
    </ButtonBase>

                </Box>
    </Box>
}

export default InputTodo;
