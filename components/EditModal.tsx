import React, {useState, useEffect} from 'react';
import {Box, Popover, InputBase, ButtonBase} from '@material-ui/core';
import { Todo } from '../interfaces'
type Props = {
    open: boolean,
    item: Todo,
}

const EditModal = ({item, open}: Props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null)
    }

    const [update, setUpdate] = useState<Todo>(item);

    return <Popover
            id = {"modal"+item.id}
            open = {open}
            anchorEl = {anchorEl}
            onClose = {handleClose}
            anchorOrigin = {{
                vertical: 'center',
                horizontal: 'center'
            }}
            >
            <Box>{item.title}</Box>
            <InputBase
                placeholder = "title..."
                value = {update.title}
                onChange = {value => setUpdate(Object.assign({...update}, {title: value}))}
            />

            <InputBase
                placeholder = "notenote..."
                value = {update.note}
                onChange = {value => setUpdate(Object.assign({...update}, {note: value}))}

            />

            <ButtonBase
                onClick = {() => {}}
            />
        </Popover>
}

export default EditModal;