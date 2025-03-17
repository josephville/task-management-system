import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation

function TaskForm({fetchTasks}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
      setCounter(counter + 1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, priority };

    fetch('http://localhost:5213/api/tasks', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    }).then(() => {
      setTitle('');
      setDescription('');
      setPriority('Low');
      fetchTasks();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={incrementCounter} className='btn btn-primary' type="submit">Add Task</button>
      <p>Counter: {counter}</p>
    </form>
  );
}
TaskForm.propTypes = {
  fetchTasks: PropTypes.any,
};

export default TaskForm;

