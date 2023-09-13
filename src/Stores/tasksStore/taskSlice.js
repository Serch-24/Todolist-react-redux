import { createSlice } from "@reduxjs/toolkit";

const taskFromStorage = window.localStorage.getItem('tasks')

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: taskFromStorage ? JSON.parse(taskFromStorage) : [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
            window.localStorage.setItem("tasks", JSON.stringify(state));
        },

        editTask: (state, action) => {
            
            const {id, title, description, priority, edit} = action.payload

            const foundTask = state.find(task => task.id === id)

            if (foundTask) {

                foundTask.title = title
                foundTask.description = description
                foundTask.priority = priority
                foundTask.edit = edit
                window.localStorage.setItem("tasks", JSON.stringify(state));
            }
        },

        deleteTask: (state, action) => {
            const taskToDelete = state.find(task => task.id === action.payload)

            if (taskToDelete) {
                state.splice(state.indexOf(taskToDelete), 1)
                window.localStorage.setItem("tasks", JSON.stringify(state));
            }
        },

        checkTask: (state, action) => {
            const taskToCheck = state.find(task => task.id === action.payload.id)

            if (taskToCheck) {
                taskToCheck.completed = action.payload.completed
                window.localStorage.setItem("tasks", JSON.stringify(state));
            }
        },

        showEditTask: (state, action) => {
            
            const taskToEdit = state.find(task => task.id === action.payload.id)

            if (taskToEdit) {
                taskToEdit.edit = action.payload.edit
                window.localStorage.setItem("tasks", JSON.stringify(state));
            }
        }
     }
})

export const {addTask, editTask, deleteTask, checkTask, showEditTask} = taskSlice.actions
export default taskSlice.reducer