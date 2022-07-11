import React, { useState } from 'react';
import taskForm from './components/TareaForm';
import task from './components/Task';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([]);

  const newTask = (task) => {
    setTaskList([task, ...taskList])
  }


  }

  return (
    <div className="App">
    </div>
  );

export default App;
