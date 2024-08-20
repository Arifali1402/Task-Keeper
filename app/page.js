"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      setError("Both title and description are required.");
      return;
    }
    setMainTask([...mainTask, { id: Date.now(), title, desc, completed: false }]);
    setTitle("");
    setDesc("");
    setError("");
  };

  const deleteHandler = (id) => {
    setMainTask(mainTask.filter((task) => task.id !== id));
  };

  const checkHandler = (id) => {
    setMainTask(mainTask.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderTask = mainTask.length > 0
    ? mainTask.map((task) => (
        <li key={task.id} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/4">
            <h5 className={`text-2xl font-semibold ${task.completed ? 'line-through' : ''}`}>{task.title}</h5>
            <h6 className={`text-lg font-medium ${task.completed ? 'line-through' : ''}`}>{task.desc}</h6>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => checkHandler(task.id)}
              // className={`bg-green-400 text-white px-4 py-2 rounded font-bold`}
              // className={`bg-${task.completed ? 'blue' : 'green'}-400 text-white px-4 py-2 rounded font-bold`}
              className={`bg-blue-400 text-white px-4 py-2 rounded font-bold`}
            >
              {task.completed ? 'Undo' : 'Check Done'}
            </button>
            <button
              onClick={() => deleteHandler(task.id)}
              className="bg-red-400 text-white px-4 py-2 rounded font-bold"
            >
              Delete
            </button>
          </div>
        </li>
      ))
    : <h2>No Task Available</h2>;

  return (
    <>
      <h1 className="bg-red-400 text-white p-5 text-2xl font-bold text-center">
        Task Keeper
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-red-400 text-white px-4 py-3 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default TodoList;
