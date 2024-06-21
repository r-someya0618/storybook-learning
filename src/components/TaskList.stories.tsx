import React from 'react'
import { Provider } from 'react-redux'
import TaskList from './TaskList'
import TaskStories, * as taskStories from './Task.stories'
import { configureStore } from '@reduxjs/toolkit'
import { TasksSlice } from '../lib/store'

export default {
  component: TaskList,
  title: 'TaskList',
  // UIを囲うデコレータ
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
}

const mockState = {
  tasks: [
    { ...taskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...taskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...taskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...taskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...taskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...taskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
  status: 'idle',
  error: null,
}

const MockStore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: { taskbox: TasksSlice.reducer },
      preloadedState: {
        taskbox: taskboxState,
      },
    })}
  >
    {children}
  </Provider>
)

export const Default = {
  decorators: [
    (Story) => (
      <MockStore taskboxState={mockState}>
        <Story />
      </MockStore>
    ),
  ],
}

export const WithPinnedTasks = {
  decorators: [
    (Story) => {
      const pinnedTasks = [
        ...mockState.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
      ]

      return (
        <MockStore taskboxState={{ ...mockState, tasks: pinnedTasks }}>
          <Story />
        </MockStore>
      )
    },
  ],
}

export const Loading = {
  decorators: [
    (Story) => (
      <MockStore taskboxState={{ ...mockState, status: 'loading' }}>
        <Story />
      </MockStore>
    ),
  ],
}

export const Empty = {
  decorators: [
    (Story) => (
      <MockStore taskboxState={{ ...mockState, tasks: [] }}>
        <Story />
      </MockStore>
    ),
  ],
}
