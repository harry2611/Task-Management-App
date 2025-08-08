import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [reload, setReload] = React.useState(false);
  const triggerReload = () => setReload(!reload);

  return (
    <div className="container mt-5">
      <h1>📝 Task Manager</h1>
      <AddTask onAdd={triggerReload} />
      <TaskList key={reload} />
    </div>
  );
}

export default App;

