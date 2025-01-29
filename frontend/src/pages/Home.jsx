import { useEffect, useRef, useState } from 'react';
import Banner from '../components/banner';
import CreateTask from './CreateTask';
import TaskList from '../components/TaskList';

function Home() {

  /*
  2 rules of hooks:
  1. Only call hooks at the top level of a function component
  2. Only call hooks from React functions, or custom hooks
  */
  const [tasks, setTasks] = useState([]); // useState is a hook that allows you to add state to a functional component
                                          // useState's initial value is passed as an argument to the function, in this case, an empty array
                                          // the first element in the returned array, tasks, represents the current state
                                          // the second element in the returned array, setTasks, is a function that allows you to update the state

  const counter = useRef(0);
        
  // TODO: move this to TaskList.jsx, or a custom hook
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5213/api/tasks', {
        headers: { 
          'Content-Type': 'application/json'
          //'Access-Control-Allow-Origin': '*'
        },
      });

      if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setTasks(data);
    } catch(error) { 
      console.error('Error fetching tasks:', error);
    }
  };

  const greeting = "Howdy";

  useEffect(() => { // useEffect is a hook that allows you to run side effects in function components
    fetchTasks();
    counter.current++;
  }, []);

  return (
    <div id="home">
      <div>{greeting}</div>
      <Banner>Task Management System</Banner>
      <CreateTask fetchTasks={fetchTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default Home; // default means that the importing side doesn't need to use curly braces, 
// and it can name the import whatever it wants

