import React, { useState } from 'react';
import List from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Learn React", completed: false },
    { id: 2, description: "Build an app", completed: false },
    { id: 3, description: "Learn JSX", completed: false },
  ]);

  const onTaskToggle = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <List
      heading="My Tasks"
      tasks={tasks}
      onTaskToggle={onTaskToggle}
    />
  );
}

export default App;


