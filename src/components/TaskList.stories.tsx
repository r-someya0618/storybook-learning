import React from 'react'
import TaskList from './TaskList'
import * as taskStories from './Task.stories'

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

export const Default = {
  args: {
    tasks: [
      {
        ...taskStories.Default.args.task,
        id: '1',
        title: 'Test 1',
      },
      {
        ...taskStories.Default.args.task,
        id: '2',
        title: 'Test 2',
      },
      {
        ...taskStories.Default.args.task,
        id: '3',
        title: 'Test 3',
      },
      {
        ...taskStories.Default.args.task,
        id: '4',
        title: 'Test 4',
      },
      {
        ...taskStories.Default.args.task,
        id: '5',
        title: 'Test 5',
      },
      {
        ...taskStories.Default.args.task,
        id: '6',
        title: 'Test 6',
      },
    ],
  },
}

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      {
        id: '6',
        title: 'Task 6 (pinned)',
        state: 'TASK_PINNED',
      },
    ],
  },
}

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
}

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
}
