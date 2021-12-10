import { Todo } from "../../interfaces";

const addTodo = (todo: Todo) => ({
    type: "ADD_TODO",
    payload: {todo}
})

const deleteTodo = (id: number) => ({
    type: "DELETE_TODO",
    payload: {id}
})

const updateTodo = (id: number, todo: Todo) => ({
    type: "UPDATE_TODO",
    payload: {
        id,
        todo
    }
})

export {addTodo, deleteTodo, updateTodo };