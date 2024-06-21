import Task from './Task'

export default {
  component: Task,
  title: 'Task',
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
}

export const Pinned = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_PINNED',
    },
  },
}

export const Archived = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_ARCHIVED',
    },
  },
}
