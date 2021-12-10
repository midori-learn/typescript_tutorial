import { combineReducers, AnyAction } from 'redux';
import { Todo } from '../../interfaces';
import {sampleTodoList} from '../../utils/sample-data';

const initialstate:Todo[] = []

const todoReducers = (state = initialstate, action: AnyAction) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload.todo];
        case "UPDATE_TODO":
            const id = action.payload.id
            const todo = action.payload.todo
            const update_state = [...state].map(
                (item: Todo) => {
                    item.id === id?
                    {...item, todo}:item
                }
            )
            return update_state
        case "DELETE_TODO":
            const id_delete = action.payload.id
            const delete_state = [...state].filter(
                (item: Todo) => item.id!==id_delete
            )
            return delete_state.length>0?delete_state:[];
        default:
            return state;
    }
}

const reducers =  combineReducers({
    todos: todoReducers,
})

export default reducers;