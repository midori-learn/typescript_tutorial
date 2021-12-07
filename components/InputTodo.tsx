import * as React from 'react';
import {Box, fade, InputBase,TableContainer, TableHead, TableBody, TableCell} from '@material-ui/core';
import Button from './Button'

type Props = {
    text: String,
    onChange: (text:String) => void
}

const InputTodo = ({text, onChange }: Props) => (
    <TableContainer display = "flex">
        <TableHead>
            <TableCell>
                Todo
            </TableCell>
            <TableCell>
                Deadline
            </TableCell>
        </TableHead>
        <TableBody>
            <TableCell>
                <InputBase
                placeholder = "Insert new todo here..."
                style = {{
                    border: "1px solid gray",
                    backgroundColor: fade("#000", 0.05),
                    width: 200,
                    borderRadius:8
                }}
                />
            </TableCell>
            <TableCell>
                <Box
                    style = {{
                        border: "1px solid gray",
                        backgroundColor: fade("#000", 0.05),
                        width: "fit-content",
                        padding: 10,
                        borderRadius:8
                    }}
                >dropdown deadline
                </Box>
            </TableCell>
            <TableCell>
                <Button
                    backgroundColor = "lightblue"
                    color = "blue"
                    title = "Add"
                    onSubmit = {() => {}}
                />
            </TableCell>
        </TableBody>
    </TableContainer>

)

export default InputTodo;
