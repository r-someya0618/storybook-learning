import React from 'react'
import { Provider } from 'react-redux'
import TaskStories, * as taskStories from './Task.stories'
import { configureStore } from '@reduxjs/toolkit'
import store, { TasksSlice } from '../lib/store'
import InboxScreen from './InboxScreen'

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
}

export const Default = {}
