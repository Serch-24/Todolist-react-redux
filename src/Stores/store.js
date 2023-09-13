import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksStore/taskSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

