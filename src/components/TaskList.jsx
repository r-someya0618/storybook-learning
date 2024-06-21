import PropType from 'prop-types'
import Task from './Task'

export default function TaskList({ loading, tasks }) {
  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span>
        <span>state</span>
      </span>
    </div>
  )

  if (loading) {
    return (
      <div className='list-items'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }
  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check'>
            <p className='title-message'>You have no tasks</p>
            <p className='subtitle-message'>Sit back and relax</p>
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className='list-items'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  loading: PropType.bool,
  tasks: PropType.arrayOf(Task.propTypes.task).isRequired,
}
TaskList.defaultProps = {
  loading: false,
}