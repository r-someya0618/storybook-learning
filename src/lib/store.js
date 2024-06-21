import { configureStore, createSlice } from '@reduxjs/toolkit'

const defaultTask = [
  { id: '1', title: 'Something 1', state: 'TASK_INBOX' },
  { id: '2', title: 'Something 2', state: 'TASK_INBOX' },
  { id: '3', title: 'Something 3', state: 'TASK_INBOX' },
  { id: '4', title: 'Something 4', state: 'TASK_INBOX' },
]

const TaskBoxData = {
  tasks: defaultTask,
  status: 'idle',
  error: null,
}

export const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload
      const task = state.tasks.findIndex((task) => task.id === id)
      if (task >= 0) {
        state.tasks[task].state = newTaskState
      }
    },
  },
})

export const { updateTaskState } = TasksSlice.actions

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
})
