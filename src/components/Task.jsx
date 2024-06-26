import PropType from 'prop-types'

export default function Task({
  task: { id, title, state },
  onPinTask,
  onArchiveTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor='checked' className='checkbox'>
        <input type='checkbox' name='checked' id={`archiveTask-${id}`} />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)}></span>
      </label>
      <label htmlFor='title' className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          id={`pinTask-${id}`}
          onClick={() => onPinTask(id)}
        >
          <span className='icon-star'></span>
        </button>
      )}
    </div>
  )
}

// JSでpropsの型定義したい時
Task.propTypes = {
  task: PropType.shape({
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    state: PropType.string.isRequired,
  }),
  onPinTask: PropType.func,
  onArchiveTask: PropType.func,
}
