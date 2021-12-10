import React from 'react';
import { Todo } from '../interfaces';
import { useDispatch, useSelector} from 'react-redux';
import { addTodo, updateTodo, deleteTodo} from '../redux/actions';

const handleAddTodo = (dispatch: Function, id:number, title: string) => {
    const newTodo: Todo = {id:id , title: title, checked: false, note: ""};
    dispatch(addTodo(newTodo));
    
}

const handleUpdateTodo = (dispatch: Function, id:number, title?: string, checked?:boolean, note?:string) => {
    const update_todo: Todo = {id: id, title:title, checked: checked, note: note};
    dispatch(updateTodo(id, update_todo));
}

const handleDeleteTodo = (dispatch: Function, id: number) => {
    console.log("handle delete", id)
    dispatch(deleteTodo(id));
}

export {handleAddTodo, handleUpdateTodo, handleDeleteTodo};