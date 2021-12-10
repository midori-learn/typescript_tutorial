import { User, Todo } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleTodoList: Todo[] = [
  {id: 1, title: "--duo-en", checked: false, note: ""},
  {id: 2, title: "--duo-jp", checked: false, note: ""},
  {id: 3, title: "--duo-vn", checked: false, note: ""},
  {id: 4, title: "--duo-cn", checked: false, note: ""},
  {id: 5, title: "--code-ts", checked: false, note: ""},
  {id: 6, title: "--gram-jp", checked: false, note: ""},
  {id: 7, title: "--gram-en", checked: false, note: ""}
]